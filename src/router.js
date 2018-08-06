import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "demugica"
    },
    {
      path: "/:msg",
      component: () => {
        return import(/* webpackChunkName: "about" */ "./views/Page.vue");
      }
    }
  ]
});
