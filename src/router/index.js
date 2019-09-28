import Vue from "vue";
import Router from "vue-router";
import { routers } from "./defines";
import config from "../config";

Vue.use(Router);

const RouterConfig = {
  mode: "history",
  base: process.env.BASE_URL,
  routes: routers
};

const router = new Router(RouterConfig);

const whiteList = ["login", "403", "404", "500", "static"]; // 不重定向白名单

router.afterEach(() => {});

export default router;
