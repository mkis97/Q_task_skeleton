import { Button } from "@/shared/components/Button";
import { ROUTES } from "@/core/types/routes";
import { router } from "@/core/router";
import { loadLocaleAsync } from "@/core/i18n";
import { i18n } from "@/core/i18n";
import { steps } from "@/core/tours/help";

export default {
  name: "Layout",

  components: { Button },

  data() {
    return {
      i18n,

      steps,
    };
  },

  computed: {
    currentLocale() {
      return localStorage.getItem("locale");
    },

    favouritesNavigation() {
      return ROUTES.FAVOURITES.NAME;
    },

    postsNavigation() {
      return ROUTES.POSTS.NAME;
    },

    isPostsPage() {
      return this.$route.name === ROUTES.POSTS.NAME;
    },
  },

  methods: {
    loadLocaleAsync,

    async logOut() {
      try {
        localStorage.removeItem("q_login");
        await router.push({ name: ROUTES.LOGIN.NAME });
      } catch (e) {
        console.log(e);
      }
    },

    async openFavourites() {
      if (this.$route.name !== ROUTES.FAVOURITES.NAME) {
        await router.push({ name: ROUTES.FAVOURITES.NAME });
      }
    },

    async openPosts() {
      if (this.$route.name !== ROUTES.POSTS.NAME) {
        await router.push({ name: ROUTES.POSTS.NAME });
      }
    },

    startTour() {
      this.$tours["help"].start();
    },
  },

  mounted() {
    if (!localStorage.getItem("isTourSeen")) {
      this.startTour();
      localStorage.setItem("isTourSeen", "true");
    }
  },
};
