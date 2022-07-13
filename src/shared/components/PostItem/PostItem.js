import { ROUTES } from "@/core/types/routes";
import { router } from "@/core/router";
import getUser from "@/shared/mixins/getUser";
import acronym from "@/shared/mixins/acronym";
import { UserAcronym } from "@/shared/components/UserAcronym";
import { mapActions, mapState } from "vuex";
import { STORE } from "@/core/types/store";

export default {
  name: "PostItem",

  components: { UserAcronym },

  props: {
    post: {
      type: Object,
      required: true,
      default: () => {},
    },
    usersArray: {
      type: Array,
      required: true,
      default: () => [],
    },
    showMoreIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    clickable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  mounted() {
    this.getLikes();
  },

  computed: {
    isPostLiked() {
      const likedPosts = this.likes;
      return likedPosts.includes(this.post.id);
    },

    ...mapState({
      likes: (state) => state.likes.likedPosts,
    }),
  },

  methods: {
    ...mapActions({
      getLikes: STORE.LIKES.ACTION.GET,
    }),

    getUser,
    acronym,

    async openSinglePost() {
      if (!this.clickable) return;
      await router.push({
        name: ROUTES.SINGLE_POST.NAME,
        params: { postId: this.post.id },
      });
    },

    openComments() {
      this.$emit("comments", this.post.id);
    },

    toggleLike() {
      let likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
      if (likedPosts.includes(this.post.id)) {
        const indexOfItem = likedPosts.indexOf(this.post.id);
        likedPosts.splice(indexOfItem, 1);
      } else {
        likedPosts.push(this.post.id);
      }
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      this.getLikes();
    },

    async openUserProfile() {
      await router.push({
        name: ROUTES.USER_PROFILE.NAME,
        params: { userId: this.post.userId },
      });
    },
  },
};
