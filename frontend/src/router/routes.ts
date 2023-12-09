import type { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/SignUp.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("@/views/SignIn.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      name: "Home",
    },
  },
];
