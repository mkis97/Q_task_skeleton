import { STORE } from "@/core/types/store";

const mutations = {
  [STORE.USERS.MUTATION.FETCH](state, loading) {
    state.loading = loading;
  },

  [STORE.USERS.MUTATION.FETCHED](state) {
    state.loading = false;
  },

  [STORE.USERS.MUTATION.SET](state, payload) {
    state.users.splice(0, state.users.length, ...payload);
  },
};

export { mutations };
