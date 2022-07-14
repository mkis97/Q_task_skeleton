export default {
  props: {
    value: {
      type: [String, Number],
    },
    options: {
      type: Array,
      required: true,
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
    requiredValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    getSelectedValue(event) {
      if (event.target.value === "") {
        return null;
      } else {
        return event.target.value;
      }
    },

    handleInput(e) {
      this.$emit("input", this.getSelectedValue(e));
    },
  },
};
