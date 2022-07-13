export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
};
