const steps = [
  {
    target: "#app_bar",
    header: {
      title: "Welcome",
    },
    content: `This is a short tour through <strong>Simple App</strong>!`,
  },
  {
    target: "#help_button",
    header: {
      title: "Help",
    },
    content: "You can start this tour at any time.",
    params: {
      placement: "bottom",
    },
    offset: -150,
  },
  {
    target: "#log_out_button",
    header: {
      title: "Log out",
    },
    content: "You can log out here",
  },
  {
    target: ".navigation_router",
    header: {
      title: "Navigation",
    },
    content: "By clicking on this items, you can navigate through application",
    params: {
      placement: "top",
    },
  },
  {
    target: "#list-sore-select",
    header: {
      title: "List actions",
    },
    content:
      "You can change sort, order, filter items by user or simply search posts on this list",
    params: {
      placement: "top",
    },
    offset: -150,
  },
  {
    target: ".post_acronym",
    header: {
      title: "Post creator",
    },
    content:
      "If you click on this, it will show you more detailed information about the user.",
    params: {
      placement: "top",
    },
    offset: -150,
  },
  {
    target: ".fa-heart",
    header: {
      title: "Like toggle",
    },
    content: "You can add or remove post from your favourites.",
    params: {
      placement: "top",
    },
    offset: -150,
  },
  {
    target: ".floating_action",
    header: {
      title: "Language changer",
    },
    content: "You can change your preferred language here.",
    params: {
      placement: "bottom",
    },
    offset: -150,
  },
];

export { steps };
