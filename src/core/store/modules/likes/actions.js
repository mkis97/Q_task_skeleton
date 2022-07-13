import { STORE } from "@/core/types/store";

const actions = {
  [STORE.LIKES.ACTION.GET]: async function ({ commit }) {
    try {
      commit(
        STORE.LIKES.MUTATION.SET,
        JSON.parse(localStorage.getItem("likedPosts")) || []
      );
    } catch (error) {
      return error;
    }
  },
};

export { actions };
