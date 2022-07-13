export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      pages: [1, 2, 3, 4, 5],
    };
  },

  methods: {
    handleClick(e) {
      this.$emit("input", e);
    },
  },
};
