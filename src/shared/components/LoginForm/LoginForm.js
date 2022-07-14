import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
import { required } from "vuelidate/lib/validators";
import { STORE } from "@/core/types/store";
import { mapState, mapActions } from "vuex";

export default {
  name: "LoginForm",

  components: { Button, Input },

  validations() {
    return {
      form: {
        username: { required },
        password: { required },
      },
    };
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      error: {
        username: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapState({
      allowedUsernames: (state) => state.users.users.map((i) => i.username),
    }),
  },

  methods: {
    ...mapActions({
      getUsers: STORE.USERS.ACTION.GET,
    }),

    async emitLogin() {
      try {
        await this.getUsers();
        await this.$v.$touch();
        const isValid = !this.$v.$anyError;
        this.$v.form.username.$error
          ? (this.error.username = this.$t("VALIDATIONS.REQUIRED"))
          : (this.error.username = "");
        this.$v.form.password.$error
          ? (this.error.password = this.$t("VALIDATIONS.REQUIRED"))
          : (this.error.password = "");
        if (!isValid) return;
        if (
          this.allowedUsernames.includes(this.form.username) &&
          this.form.password === "12345"
        ) {
          this.$toast.open({
            message: this.$t("TOASTS.WELCOME"),
            type: "success",
            duration: 1500,
          });
          this.$emit("login");
        } else {
          this.$toast.open({
            message: this.$t("TOASTS.WRONG_DATA"),
            type: "error",
            duration: 1500,
          });
        }
      } catch (e) {
        this.$toast.error(this.$t("TOASTS.ERROR_OCCURRED"));
      }
    },
  },
};
