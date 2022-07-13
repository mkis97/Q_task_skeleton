import { STORE } from "@/core/types/store";

const mutations = {
  [STORE.LIKES.MUTATION.SET](state, payload) {
    state.likedPosts.splice(0, state.likedPosts.length, ...payload);
  },
};

export { mutations };
