import { PostItem } from "@/shared/components/PostItem";
import { Input } from "@/shared/components/Input";
import { Select } from "@/shared/components/Select";
import { Pagination } from "@/shared/components/Pagination";
import { CommentsList } from "@/shared/components/CommentsList";
import debounce from "lodash/debounce";
import { api } from "@/core/api";
import { mapActions, mapState } from "vuex";
import { STORE } from "@/core/types/store";
import { LoaderIndicator } from "@/shared/components/LoaderIndicator";

export default {
  components: {
    CommentsList,
    Pagination,
    Select,
    Input,
    PostItem,
    LoaderIndicator,
  },
  data() {
    return {
      isHydrated: false,
      posts: [],
      localParams: {
        q: "",
        userId: null,
        _page: 1,
        _limit: 20,
        _sort: "id",
        _order: "asc",
      },
      sortOptions: [
        { id: "id", name: "ID" },
        { id: "userId", name: "User ID" },
        { id: "title", name: "Title" },
        {
          id: "body",
          name: "Body",
        },
      ],
      orderOptions: [
        { id: "asc", name: "ASC" },
        { id: "desc", name: "DESC" },
      ],
    };
  },

  async created() {
    try {
      await this.getPosts();
      await this.getUsers();
      this.isHydrated = true;
    } catch (e) {
      this.$toast.error("Something went wrong");
    }
  },

  computed: {
    showPagination() {
      return !this.localParams.q && !this.localParams.userId;
    },

    ...mapState({
      users: (state) => state.users.users,
    }),
  },

  methods: {
    ...mapActions({
      getUsers: STORE.USERS.ACTION.GET,
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

    debouncedGetPosts: debounce(async function () {
      await this.getPosts();
    }, 300),
  },

  watch: {
    localParams: {
      deep: true,
      handler() {
        this.debouncedGetPosts();
      },
    },

    "localParams.q"() {
      this.localParams._page = 1;
    },

    "localParams.userId"() {
      this.localParams._page = 1;
    },
  },
};
