import { ROUTES } from "@/core/types/routes";
import { PostsPage } from "@/views/PostsPage";
import { LoginPage } from "@/views/LoginPage";
import { SinglePostPage } from "@/views/SinglePostPage";
import { FavouritesPage } from "@/views/FavouritesPage";
import { UserProfilePage } from "@/views/UserProfilePage";
import { AnalyticsPage } from "@/views/AnalyticsPage";
import { Layout } from "@/core/hoc/Layout";
import { Clear } from "@/core/hoc/Clear";

const routes = [
  {
    path: ROUTES.LOGIN.PATH,
    name: ROUTES.LOGIN.NAME,
    component: LoginPage,
    meta: { layout: Clear },
  },
  {
    path: ROUTES.POSTS.PATH,
    name: ROUTES.POSTS.NAME,
    component: PostsPage,
    meta: { layout: Layout },
  },
  {
    path: ROUTES.SINGLE_POST.PATH,
    name: ROUTES.SINGLE_POST.NAME,
    component: SinglePostPage,
    meta: { layout: Layout },
  },
  {
    path: ROUTES.FAVOURITES.PATH,
    name: ROUTES.FAVOURITES.NAME,
    component: FavouritesPage,
    meta: { layout: Layout },
  },
  {
    path: ROUTES.USER_PROFILE.PATH,
    name: ROUTES.USER_PROFILE.NAME,
    component: UserProfilePage,
    meta: { layout: Layout },
  },
  {
    path: ROUTES.ANALYTICS.PATH,
    name: ROUTES.ANALYTICS.NAME,
    component: AnalyticsPage,
    meta: { layout: Layout },
  },
];

export { routes };
