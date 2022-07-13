import { i18n } from "@/core/i18n";

const steps = [
  {
    target: "#app_bar",
    header: {
      title: i18n.t("HELP.STEP_1.TITLE"),
    },
    content: i18n.t("HELP.STEP_1.BODY"),
  },
  {
    target: "#help_button",
    header: {
      title: i18n.t("HELP.STEP_2.TITLE"),
    },
    content: i18n.t("HELP.STEP_2.BODY"),
    params: {
      placement: "bottom",
    },
    offset: -150,
  },
  {
    target: "#log_out_button",
    header: {
      title: i18n.t("HELP.STEP_3.TITLE"),
    },
    content: i18n.t("HELP.STEP_3.BODY"),
  },
  {
    target: ".navigation_router",
    header: {
      title: i18n.t("HELP.STEP_4.TITLE"),
    },
    content: i18n.t("HELP.STEP_4.BODY"),
    params: {
      placement: "top",
    },
  },
  {
    target: "#list-sore-select",
    header: {
      title: i18n.t("HELP.STEP_5.TITLE"),
    },
    content: i18n.t("HELP.STEP_5.BODY"),
    params: {
      placement: "top",
    },
    offset: -150,
  },
  {
    target: ".post_acronym",
    header: {
      title: i18n.t("HELP.STEP_6.TITLE"),
    },
    content: i18n.t("HELP.STEP_6.BODY"),
    params: {
      placement: "top",
    },
    offset: -150,
  },
  {
    target: ".fa-heart",
    header: {
      title: i18n.t("HELP.STEP_7.TITLE"),
    },
    content: i18n.t("HELP.STEP_7.BODY"),
    params: {
      placement: "top",
    },
    offset: -150,
  },
  {
    target: ".floating_action",
    header: {
      title: i18n.t("HELP.STEP_8.TITLE"),
    },
    content: i18n.t("HELP.STEP_8.BODY"),
    params: {
      placement: "bottom",
    },
    offset: -150,
  },
];

export { steps };
