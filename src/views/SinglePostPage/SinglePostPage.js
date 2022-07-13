import { PostItem } from "@/shared/components/PostItem";
import { CommentsList } from "@/shared/components/CommentsList";
import { api } from "@/core/api";
import { mapActions, mapState } from "vuex";
import { STORE } from "@/core/types/store";
import { LoaderIndicator } from "@/shared/components/LoaderIndicator";

export default {
  components: { CommentsList, PostItem, LoaderIndicator },
  data() {
    return {
      post: {},
      isHydrated: false,
    };
  },

  computed: {
    ...mapState({
      users: (state) => state.users.users,
    }),
  },

  async created() {
    try {
      const resPost = await api.auth.getPost(this.$route.params.postId);
      this.post = resPost.data;
      await this.getUsers();
      this.isHydrated = true;
    } catch (e) {
      this.$toast.error("Something went wrong");
    }
  },

  methods: {
    ...mapActions({
      getUsers: STORE.USERS.ACTION.GET,
    }),
  },
};
