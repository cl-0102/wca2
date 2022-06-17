import Web3 from "web3";

const state = {
  web3: null,
  network: 0,
  networkSpec: 4,
  addressOfEth: "0x",
  balanceOfEth: 0,

  usdt: "0xCA81a83a597f2A352A09613841AC41a403AEAa44",
  wcupape: "0xC07DB0F91798A72B133E683d28a5E3a757E9519f",


  usdtContract: null,
  wcupapeContract: null,

  // state: get from chain
  gasPrice: 1e9,

  // fell:flags
  connectStatusId: 0,
  contractsAted: false,
  isMintable: false,
  isClaimable: false,
};

const mutations = {
  SET_WEB3: (state, web3) => {
    state.web3 = web3;
  },
  SET_NETWORK: (state, network) => {
    state.network = network;
  },
  SET_NETWORK_SPEC: (state, networkSpec) => {
    state.networkSpec = networkSpec;
  },
  SET_ADDRESS_OF_ETH: (state, addressOfEth) => {
    state.addressOfEth = addressOfEth;
  },
  SET_BALANCE_OF_ETH: (state, b) => {
    state.balanceOfEth = b;
  },

  SET_NFT_CONTRACT: (state, nft) => {
    state.JuraNFTContract = nft;

    // console.log("nft1", nft);
  },
  SET_TOKEN_CONTRACT: (state, t) => {
    state.JuraTokenContract = t;
  },

  SET_WORLDNFT_CONTRACT: (state, nft) => {
    state.WorldcupNFTContract = nft
    // console.log("nft1", nft);
  },

  SET_WCUPAPE_CONTRACT: (state, w) => {
    state.wcupapeContract = w
    console.log("w", w);
  },

  SET_USDT_CONTRACT: (state, u) => {
    state.usdtContract = u
    console.log("u", u)
  },

  SET_GAS_PRICE: (state, p) => {
    state.gasPrice = p;
  },
  SET_CONNECT_STATUS_ID: (state, s) => {
    state.connectStatusId = s;
  },
  SET_CONTRACT_ATED: (state, at) => {
    state.contractsAted = at;
  },
  SET_IS_MINTABLE: (state, m) => {
    state.isMintable = m;
  },
  SET_IS_CLAIMABLE: (state, c) => {
    state.isClaimable = c;
  },
};
const actions = {
  async init ({ dispatch }) {
    await dispatch("initWeb3");
    await dispatch("wCupApe/init", {}, { root: true });
  },
  async initWeb3 ({ dispatch, commit }) {
    global.$log.debug("init web3");
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      commit("SET_WEB3", web3);

      await dispatch("onChainChanged");
      await dispatch("onAccountsChanged");
      await dispatch("onConnect");
      await dispatch("onDisconnect");

      await dispatch("connect");
    } else {
      ommit("SET_CONNECT_STATUS_ID", 1);
      global.$log.error("need install metamask");
      return Promise.reject("need install metamask");
    }
  },
  async onChainChanged ({ dispatch }) {
    window.ethereum.on("chainChanged", async function (chainId) {
      global.$log.debug("metamask event : onChainChanged chainId=", chainId);
      await dispatch("connect");
    });
  },
  async onAccountsChanged ({ dispatch }) {
    window.ethereum.on("accountsChanged", async function (accounts) {
      global.$log.debug(
        "metamask event : onAccountsChanged accounts=",
        accounts
      );
      await dispatch("connect");

      // await dispatch('fina/init',{},{root:true})
    });
  },
  async onConnect ({ dispatch }) {
    window.ethereum.on("connect", async function (connectInfo) {
      global.$log.info("metamask event : onConnect connectInfo=", connectInfo);
      // ignore : connect action had handle
      await dispatch("connect");
    });
  },
  async onDisconnect () {
    window.ethereum.on("disconnect", async function (error) {
      global.$log.info("metamask event : onDisconnect error=", error);
      // TODO: may be need clear other state
      // await dispatch("connect");
    });
  },
  async connect ({ state, dispatch, commit }) {
    try {
      await window.ethereum.enable();
      global.$log.debug("finish wallet connect");

      await dispatch("chainNetwork");
      // if (state.connectStatusId == 5) {
      //   return Promise.reject(
      //     `please change chain network from ${state.network} to ${state.networkSpec}`
      //   );
      // }
      await dispatch("coinBase");
      if (state.connectStatusId != 7) {
        return Promise.reject(
          `please check metamask , con't get address of eth`
        );
      }
      await dispatch("getGasPrice");
      await dispatch("contractAt");
      global.$log.info("contract ated");
      return Promise.resolve();
    } catch (err) {
      commit("SET_CONNECT_STATUS_ID", 2);
      global.$log.error("metamask enable err ", err);
      return Promise.reject(err);
    }
  },
  async chainNetwork ({ state, commit }) {
    const web3 = state.web3;
    const network = await web3.eth.net.getId();
    global.$log.debug("chain network", network);
    commit("SET_NETWORK", network);
    commit("SET_CONNECT_STATUS_ID", network == state.networkSpec ? 6 : 5);
  },
  async coinBase ({ state, commit }) {
    const web3 = state.web3;
    const coinBase = await web3.eth.getCoinbase();
    global.$log.debug("coinBase", coinBase);
    commit("SET_ADDRESS_OF_ETH", coinBase);
    commit("SET_CONNECT_STATUS_ID", 7);
  },
  async getGasPrice ({ state, commit }) {
    const web3 = state.web3;
    const gasPrice = await web3.eth.getGasPrice();
    global.$log.debug("gas Price ", gasPrice);
    commit("SET_GAS_PRICE", gasPrice);
  },
  async getBalanceOfEth ({ state, commit }) {
    const web3 = state.web3;
    const balance = await web3.eth.getBalance(state.addressOfEth);
    global.$log.info("balance of eth=", balance);
    commit("SET_BALANCE_OF_ETH", balance);
  },
  async contractAt ({ state, commit }) {
    const web3 = state.web3;
    const JuranftAbi = require("@/contracts/JuranftAbi");
    const JuratokenAbi = require("@/contracts/JuratokenAbi");
    const wcupape = require("@/contracts/WCupApe")
    const usdt = require("@/contracts/Usdt")
    commit(
      "SET_USDT_CONTRACT",
      new web3.eth.Contract(usdt, state.usdt)
    );
    commit(
      "SET_WCUPAPE_CONTRACT",
      new web3.eth.Contract(wcupape, state.wcupape)
    );
    // commit(
    //   "SET_NFT_CONTRACT",
    //   new web3.eth.Contract(JuranftAbi, state.addressOfJuraNFT)
    // );
    // commit(
    //   "SET_TOKEN_CONTRACT",
    //   new web3.eth.Contract(JuratokenAbi, state.addressOfJuraToken)
    // );
    commit("SET_CONTRACT_ATED", true);
    commit("SET_IS_MINTABLE", true);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
