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

Vue.config.productionTip = false;

Vue.use(VueToast, { position: "bottom" }).use(Vuelidate);

library.add(faChevronDown);
library.add(faHeart);
library.add(faSpinner);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.filter("capitalize", capitalize);

new Vue({
  i18n,
  router,
  store,
  axios,
  render: (h) => h(App),
}).$mount("#app");
