export default {
  props: {
    value: {
      type: [String, Number],
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    inputId: {
      type: String,
      required: true,
      default: "",
    },
    label: {
      type: String,
      required: true,
      default: "",
    },
    errorMsg: {
      type: String,
      required: false,
      default: "",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
