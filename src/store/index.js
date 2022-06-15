import { createStore } from "vuex";

import web3s from "./modules/web3s";
import juranft from "./modules/juranft";
import juratoken from "./modules/juratoken";
import wCupApe from "./modules/wCupApe";
import allowance from "./modules/allowance";
import getters from "./getters";

const store = createStore({
  modules: {
    web3s,
    juranft,
    juratoken,
    wCupApe,
    allowance
  },
  getters,
});

export default store;
