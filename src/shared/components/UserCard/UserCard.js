import { api } from "@/core/api";

export default {
  data() {
    return {
      user: {},
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 12,
    };
  },

  async mounted() {
    try {
      const res = await api.auth.getUser(this.$route.params.userId);
      this.user = res.data;

      // dirty hack used to properly load leaflet map because without this line, it loads partially (leaflet and webpack are not in love with each other :( )
      window.dispatchEvent(new Event("resize"));
    } catch (e) {
      this.$toast.error(this.$t("TOASTS.ERROR_OCCURRED"));
    }
  },
};
