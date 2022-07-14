import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { mapActions, mapState } from "vuex";
import { STORE } from "@/core/types/store";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: null,
    };
  },

  async mounted() {
    await this.getUsers();

    this.chartData = {
      labels: this.users,
      datasets: [
        {
          label: this.$t("ANALYTICS.LABEL"),
          backgroundColor: "#1FA268",
          data: [...Array(10)].map(() => Math.floor(Math.random() * 15 + 1)),
        },
      ],
    };

    this.loaded = true;
  },

  computed: {
    ...mapState({
      users: (state) => state.users.users.map((user) => user.name),
    }),
  },

  methods: {
    ...mapActions({
      getUsers: STORE.USERS.ACTION.GET,
    }),
  },
};
