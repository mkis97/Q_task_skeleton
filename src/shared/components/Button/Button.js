export default {
  name: "Button",

  props: {
    value: {
      type: String,
      required: true,
      default: "",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    action() {
      this.$emit("clicked");
    },
  },
};
