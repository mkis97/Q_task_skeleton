import Vue from "vue";
import Vuex from "vuex";
import { users } from "./modules/users";
import { likes } from "./modules/likes";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false,
  },

  // mutations: {
  //   [STORE.GLOBAL.MUTATION.LOADER_SET](state, loading) {
  //     state.loading = loading;
  //   },
  // },
  // actions: {
  //   [STORE.GLOBAL.ACTION.LOADER_SET]({ commit }, payload) {
  //     commit(STORE.GLOBAL.MUTATION.LOADER_SET, payload);
  //   },
  // },
  modules: {
    users,
    likes,
  },
});

export { store };
