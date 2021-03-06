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

      tourButtonLabels: {
        buttonSkip: i18n.t("HELP.BUTTONS.SKIP"),
        buttonPrevious: i18n.t("HELP.BUTTONS.PREVIOUS"),
        buttonNext: i18n.t("HELP.BUTTONS.NEXT"),
        buttonStop: i18n.t("HELP.BUTTONS.FINISH"),
      },
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

    analyticsNavigation() {
      return ROUTES.ANALYTICS.NAME;
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
        this.$toast.error(this.$t("TOASTS.ERROR_OCCURRED"));
      }
    },

    async openHomePage() {
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
