import { LoginForm } from "@/shared/components/LoginForm";
import { ROUTES } from "@/core/types/routes";
import { loadLocaleAsync } from "@/core/i18n";

export default {
  components: { LoginForm },

  async created() {
    if (localStorage.getItem("locale")) {
      await loadLocaleAsync(localStorage.getItem("locale"));
    } else {
      await loadLocaleAsync("en");
    }
  },

  methods: {
    async login() {
      localStorage.setItem("q_login", "true");
      await this.$router.push({ name: ROUTES.POSTS.NAME });
    },
  },
};
