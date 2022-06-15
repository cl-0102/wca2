const state = {
  balanceOfNFT: 0,
  totalSupply: 0,
  maxSupply: 2000,
  nftIds: [],
  nftIdsTemp: [],
  priceOnMint: 8 * 1e3,
  claimablePower: 0,
  // isDisabled: false,
};
const mutations = {
  SET_BALANCE_OF_NFT: (state, b) => {
    state.balanceOfNFT = b;
  },
  ADD_NFT_IDS_TO_TEMP: (state, id) => {
    state.nftIdsTemp = [...state.nftIdsTemp, id];
  },
  CLEAR_NFT_IDS_TEMP: (state) => {
    state.nftIdsTemp = [];
  },
  SET_NFT_IDS_FROM_TEMP: (state) => {
    state.nftIds = state.nftIdsTemp;
    global.$log.info("nft list", state.nftIds);
  },
  SET_CLAIMABLE_POWER: (state, p) => {
    state.claimablePower = p;
  },
  // SET_IS_DISABLED: (state, m) => {
  //   state.isDisabled = m;
  // },
  SET_TOTAL_SUPPLY: (state, t) => {
    if (t > state.maxSupply) {
      t = state.maxSupply;
    }
    state.totalSupply = t;
  },
  SET_MAX_SUPPLY: (state, m) => {
    state.maxSupply = m;
  },
};
const actions = {
  async init ({ rootState, dispatch }) {
    if (!rootState.web3s.contractsAted) return;
    await dispatch("allowance/init", {}, { root: true });
    // await dispatch("getAllowance");
  },


  async approve ({ state, rootState, dispatch }, { wca }) {
    const web3 = rootState.web3s.web3;
    const usdt = rootState.web3s.usdtContract
    return await usdt.methods.approve(wca, web3.utils.toWei(`2000`)).send({ from: rootState.web3s.addressOfEth }, (err, txHash) => {
      console.log(err, txHash)
    })
  },

  async mintByUser ({ state, rootState, dispatch }, { amount }) {
    const web3 = rootState.web3s.web3;
    const wcupnft = rootState.web3s.wcupapeContract
    const sender = rootState.web3s.addressOfEth
    console.log("wcupnft1", wcupnft);
    await dispatch("allowance/getBalance", {}, { root: true })
    const allowance = parseFloat(
      web3.utils.fromWei(`${rootState.allowance.balance}`)
    );
    console.log("allowance", allowance)
    // const neddAllowance = parseFloat(web3.utils.fromWei(`${800000}`))
    // console.log("neddAllowance", neddAllowance);

    if (1000 > allowance) {
      return Promise.reject(`you had no enough coin, need 1000`)
    }

    return await wcupnft.methods.mintByUser(amount).send({ from: sender }, (err, txHash) => {
      console.log(err, txHash)
    })
  },

  // async getAllowance ({ rootState }) {
  //   const web3 = rootState.web3s.web3;
  //   const usdt = rootState.web3s.usdtContract;
  //   const holder = rootState.web3s.addressOfEth;
  //   const balance = await usdt.methods.allowance(holder).call({ from: holder });
  //   global.$log.info("allowance balance=", web3.utils.fromWei(`${balance}`));
  //   commit("SET_BALANCE", balance);
  //   console.log("a");
  // }


};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
