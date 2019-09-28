export const appRouter = {
  path: "/",
  name: "root",
  component: () => import("../views"),
  redirect: "/home",
  children: [
    {
      path: "home",
      name: "home",
      component: () => import("../views/home/")
    }
  ]
};

//不需要权限验证的通用路由
export const commonRouters = [];

export const routers = [appRouter];
