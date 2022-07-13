import { api } from "@/core/api";

export default {
  data() {
    return {
      user: {},
    };
  },

  async mounted() {
    try {
      const res = await api.auth.getUser(this.$route.params.userId);
      this.user = res.data;
    } catch (e) {
      this.$toast.error("Something went wrong");
    }
  },
};
