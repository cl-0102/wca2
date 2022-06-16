const getters = {
  web3: (state) => state.web3s.web3,
  connectStatusId: (state) => state.web3s.connectStatusId,
  addressOfEth: (state) => state.web3s.addressOfEth,
  balanceOfEth: (state) => state.web3s.balanceOfEth,
  contractsAted: (state) => state.web3s.contractsAted,
  isMintable: (state) => state.web3s.isMintable,
  claimablePower: (state) => state.juranft.claimablePower,
  // isDisabled: (state) => state.juranft.isDisabled
  totalSupply: (state) => state.juranft.totalSupply,
  maxSupply: (state) => state.juranft.maxSupply,
  isOn: (state) => state.allowance.isOn
};

export default getters;
