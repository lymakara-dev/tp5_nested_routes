import Page1 from "@/views/Page1.vue";
import Page2 from "@/views/Page2.vue";
import Page3 from "@/views/Page3.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "Page1",
      children: [
        {
          path: "page1",
          name: "Page1",
          component: Page1,
        },
        {
          path: "page2",
          name: "Page2",
          component: Page2,
        },
        {
          path: "page3",
          name: "Page3",
          component: Page3,
        },
      ],
    },
  ],
});

export default router;
