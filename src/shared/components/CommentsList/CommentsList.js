import { CommentItem } from "@/shared/components/CommentItem";
import { api } from "@/core/api";

export default {
  name: "CommentsList",

  components: { CommentItem },
  props: {
    postId: {
      type: Number,
      required: false,
      default: null,
    },
  },

  data() {
    return {
      comments: [],
    };
  },

  async created() {
    try {
      const res = await api.auth.getPostsComments(
        this.$route.params.postId || this.postId
      );
      this.comments = res.data;
    } catch (e) {
      this.$toast.error("Something went wrong");
    }
  },
};
