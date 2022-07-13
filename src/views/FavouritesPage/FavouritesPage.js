import { PostItem } from "@/shared/components/PostItem";
import { api } from "@/core/api";
import { mapActions, mapState } from "vuex";
import { STORE } from "@/core/types/store";

export default {
  components: {
    PostItem,
  },

  data() {
    return {
      isHydrated: false,
      posts: [],
    };
  },

  async created() {
    try {
      await this.getPosts();
      await this.getUsers();
    } catch (e) {
      this.$toast.error("Something went wrong");
    }
  },

  mounted() {
    this.getLikes();
    this.isHydrated = true;
  },

  computed: {
    showPagination() {
      return !this.localParams.q && !this.localParams.userId;
    },

    ...mapState({
      users: (state) => state.users.users,
      likes: (state) => state.likes.likedPosts,
    }),

    likedPosts() {
      return this.posts.filter(({ id }) => this.likes.includes(id));
    },
  },

  methods: {
    ...mapActions({
      getUsers: STORE.USERS.ACTION.GET,
      getLikes: STORE.LIKES.ACTION.GET,
    }),

    async getPosts() {
      try {
        const resPosts = await api.auth.getPosts(this.localParams);
        this.posts = resPosts.data;
      } catch (e) {
        console.log(e);
        this.$toast.error("Something went wrong");
      }
    },
  },
};
