import { Button } from "@/shared/components/Button";
import { ROUTES } from "@/core/types/routes";
import { router } from "@/core/router";
import { loadLocaleAsync } from "@/core/i18n";
import { i18n } from "@/core/i18n";

export default {
  name: "Layout",

  components: { Button },

  data() {
    return {
      i18n,
    };
  },

  computed: {
    currentLocale() {
      return localStorage.getItem("locale");
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
      await router.push({ name: ROUTES.FAVOURITES.NAME });
    },

    async openPosts() {
      await router.push({ name: ROUTES.POSTS.NAME });
    },
  },

  mounted() {},
};
