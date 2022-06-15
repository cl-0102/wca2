const state = {
  balanceOfNFT: 0,
  totalSupply: 0,
  maxSupply: 2000,
  nftIds: [],
  nftIdsTemp: [],
  priceOnMint: 80 * 1e15,
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
    await dispatch("getAmountOfPowerClaimable");
    await dispatch("juratoken/init", {}, { root: true });
    await dispatch("getBalanceOfJuranft");
  },

  async mint ({ state, rootState, dispatch }, { amount }) {
    // commit("SET_IS_DISABLED", true);
    const nft = rootState.web3s.JuraNFTContract;
    const sender = rootState.web3s.addressOfEth;
    const web3 = rootState.web3s.web3;
    await dispatch("getTotalSupply");
    if (state.totalSupply >= state.maxSupply) {
      return Promise.reject("had finish");
    }
    const mintableAmount = state.maxSupply - state.totalSupply;
    amount = amount > mintableAmount ? mintableAmount : amount;
    await dispatch("web3s/getBalanceOfEth", {}, { root: true });
    const balance = parseFloat(
      web3.utils.fromWei(`${rootState.web3s.balanceOfEth}`)
    );
    const needValue =
      parseFloat(web3.utils.fromWei(`${state.priceOnMint}`)) * amount;
    global.$log.info(
      "needValue=",
      needValue,
      " balance=",
      balance,
      " amount=",
      amount,
      " priceOnMint=",
      state.priceOnMint
    );
    if (needValue > balance) {
      return Promise.reject(`you had no enough coin, need ${needValue}`);
    }
    const needValueByWei = web3.utils.toWei(`${needValue}`);
    const gas = await nft.methods
      .mintByUser(amount)
      .estimateGas({ from: sender, value: needValueByWei });
    global.$log.info("gas=", gas);
    const gasPrice = rootState.web3s.gasPrice;
    return await nft.methods
      .mintByUser(amount)
      .send(
        { from: sender, value: needValueByWei, gasPrice: gasPrice, gas: gas },
        (err, txHash) => {
          if (err) {
            global.$log.info("action:mint", "mint by user err:", err);
          } else {
            global.$log.info("action:mint", "hash=", txHash);
          }
        }
      );
    // return Promise.resolve("success");
  },
  async clainPower ({ rootState, state, dispatch }) {
    const nft = rootState.web3s.JuraNFTContract;
    const sender = rootState.web3s.addressOfEth;
    const web3 = rootState.web3s.web3;
    await dispatch("getAmountOfPowerClaimable");
    const cp = parseFloat(`${web3.utils.fromWei(`${state.claimablePower}`)}`);
    if (cp <= 0) return Promise.reject("no claimable jura");
    const gas = await nft.methods.claimPower().estimateGas({ from: sender });
    global.$log.info("claimPower", "gas=", gas);
    const gasPrice = rootState.web3s.gasPrice;
    return await nft.methods
      .claimPower()
      .send({ from: sender, gasPrice: gasPrice, gas: gas }, (err, txHash) => {
        if (err) {
          global.$log.info("action:mint", "mint by user err:", err);
        } else {
          global.$log.info("action:mint", "hash=", txHash);
        }
      });
  },
  async getBalanceOfJuranft ({ rootState, commit, dispatch }) {
    dispatch('getTotalSupply')
    const nft = rootState.web3s.JuraNFTContract;
    const holder = rootState.web3s.addressOfEth;
    const balanceOfNft = await nft.methods
      .balanceOf(holder)
      .call({ from: holder });
    commit("SET_BALANCE_OF_NFT", balanceOfNft);
    global.$log.info("balanceOfNft=", balanceOfNft);
    const balance = parseInt(balanceOfNft);
    if (balance > 0) {
      commit("CLEAR_NFT_IDS_TEMP");
      for (let i = 0; i < balance; i++) {
        await dispatch("getTokenIdOfOwnerByIndex", { index: i });
      }
      commit("SET_NFT_IDS_FROM_TEMP");
    }
  },
  async getTokenIdOfOwnerByIndex ({ rootState, commit }, { index }) {
    const nft = rootState.web3s.JuraNFTContract;
    const holder = rootState.web3s.addressOfEth;
    const tokenId = await nft.methods
      .tokenOfOwnerByIndex(holder, index)
      .call({ from: holder });
    commit("ADD_NFT_IDS_TO_TEMP", tokenId);
  },
  async getAmountOfPowerClaimable ({ rootState, commit, dispatch }) {
    if (!rootState.web3s.contractsAted)
      return Promise.reject("Please Connect Wallet");
    await dispatch("getTotalSupply");
    const web3 = rootState.web3s.web3;
    const nft = rootState.web3s.JuraNFTContract;
    const holder = rootState.web3s.addressOfEth;
    const cp = await nft.methods
      .getAmountOfPowerClaimable()
      .call({ from: holder });
    commit("SET_CLAIMABLE_POWER", cp);
    global.$log.info("claimable power=", web3.utils.fromWei(`${cp}`));
  },
  async getTotalSupply ({ rootState, state, commit }) {
    const nft = rootState.web3s.JuraNFTContract;
    const sender = rootState.web3s.addressOfEth;
    // const totalSupply = await nft.methods.totalSupply().call({ from: sender });
    // commit("SET_TOTAL_SUPPLY", parseInt(totalSupply));
    global.$log.info(
      "total supply=",
      state.totalSupply,
      "max supply=",
      state.maxSupply
    );
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
