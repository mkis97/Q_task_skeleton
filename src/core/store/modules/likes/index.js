import { actions } from "./actions";
import { mutations } from "./mutations";

const likes = {
  state: {
    likedPosts: [],
  },
  actions,
  mutations,
};

export { likes };
