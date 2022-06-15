const state = {
  balance: 0,
};
const mutations = {
  SET_BALANCE: (state, b) => {
    state.balance = b;
  },
};
const actions = {
  async init ({ rootState, dispatch }) {
    if (!rootState.web3s.contractsAted) return;
    dispatch("getBalance");
  },
  async getBalance ({ rootState, commit }) {
    const web3 = rootState.web3s.web3;
    const jura = rootState.web3s.JuraTokenContract;
    const holder = rootState.web3s.addressOfEth;
    const balance = await jura.methods.balanceOf(holder).call({ from: holder });
    global.$log.info("jura token balance=", web3.utils.fromWei(`${balance}`));
    commit("SET_BALANCE", balance);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
