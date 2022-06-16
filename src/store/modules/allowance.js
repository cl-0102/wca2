const state = {
  balance: 0,
  isOn: false
};
const mutations = {
  SET_BALANCE: (state, b) => {
    state.balance = b;
  },
  SET_ON: (state, o) => {
    state.isOn = o
  }
};
const actions = {
  async init ({ rootState, dispatch }) {
    if (!rootState.web3s.contractsAted) return;
    dispatch("getBalance");
  },
  async getBalance ({ rootState, commit }) {
    const web3 = rootState.web3s.web3;
    const usdt = rootState.web3s.usdtContract;
    const wcupape = rootState.web3s.wcupape
    const holder = rootState.web3s.addressOfEth;
    const balance = await usdt.methods.allowance(holder, wcupape).call({ from: holder });
    global.$log.info("allowance balance=", web3.utils.fromWei(`${balance}`));
    commit("SET_BALANCE", balance);
    if (balance > 0) {
      commit("SET_ON", true);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
