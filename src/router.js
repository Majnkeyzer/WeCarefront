import Vue from "vue";
import Router from "vue-router";
import ListPage from "./views/ListPage.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: ListPage
    },
    {
      path: "/brewery/:id",
      name: "brewerydetail",
      component: About
    }
  ]
});
