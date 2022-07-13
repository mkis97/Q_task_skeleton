import Vue from "vue";
import App from "./App.vue";
import { router } from "@/core/router";
import { store } from "@/core/store";
import axios from "axios";
import Vuelidate from "vuelidate";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { i18n } from "@/core/i18n";
import capitalize from "@/shared/filters/capitalize";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import VueTour from "vue-tour";

require("vue-tour/dist/vue-tour.css");

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

Vue.config.productionTip = false;

Vue.use(VueToast, { position: "bottom" }).use(Vuelidate).use(VueTour);

library.add(faChevronDown);
library.add(faHeart);
library.add(faSpinner);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.filter("capitalize", capitalize);

new Vue({
  i18n,
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
