import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Demo from "@/views/demo/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Demo" },
    children: [
      {
        path: "demo",
        name: "Demo",
        component: Demo,
        meta: {
          title: "主页",
          noCache: true
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "工具",
          noCache: true
        }
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/about/index.vue"),
        meta: {
          title: "关于",
          noCache: true
        }
      },
      {
        path: "list",
        name: "List",
        component: () => import("@/views/list/index.vue"),
        meta: {
          title: "列表",
          noCache: true
        }
      },
      {
        path: "form",
        name: "FormView",
        component: () => import("@/views/form/index.vue"),
        meta: {
          title: "表单",
          noCache: true
        }
      }
    ]
  }
];

export default routes;
