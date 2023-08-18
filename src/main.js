import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import BookingTheService from "./pages/BookingTheService.vue";
import HomeScreenLoggedOn from "./pages/HomeScreenLoggedOn.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "BookingTheService",
    component: BookingTheService,
  },
  {
    path: "/home-screen-logged-on",
    name: "HomeScreenLoggedOn",
    component: HomeScreenLoggedOn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "Mentor";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");

export default router;
