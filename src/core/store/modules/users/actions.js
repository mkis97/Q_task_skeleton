import { api } from "@/core/api";
import { STORE } from "@/core/types/store";

const actions = {
  [STORE.USERS.ACTION.GET]: async function ({ commit }) {
    try {
      commit(STORE.USERS.MUTATION.FETCH, true);

      const res = await api.auth.getUsers();

      commit(STORE.USERS.MUTATION.FETCHED);

      commit(STORE.USERS.MUTATION.SET, res.data);
    } catch (error) {
      commit(STORE.USERS.MUTATION.FETCH, false);
      return error;
    }
  },
};

export { actions };
