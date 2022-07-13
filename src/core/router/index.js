import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
import auth from "@/shared/middlewares/auth";
import loggedIn from "@/shared/middlewares/loggedIn";
import { ROUTES } from "@/core/types/routes";

Vue.use(Router);

const router = new Router({
  routes,
  mode: "history",
  base: "/",
});

router.beforeEach(async (to, from, next) => {
  if (to.name === ROUTES.LOGIN.NAME) {
    const isValid = loggedIn();
    if (!isValid) {
      return next({ name: ROUTES.POSTS.NAME });
    }
  } else {
    const isValid = auth();
    if (!isValid) {
      return next({ name: ROUTES.LOGIN.NAME });
    }
  }

  return next();
});

export { router };
