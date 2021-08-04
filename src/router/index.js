import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     component: Home,
//   },
// ];

const router = new VueRouter({
  routes: [
    { path: '/', component: Home, props: true },

    // for routes with named views, you have to define the `props` option for each named view:
    {
      path: '/',
      components: {
        default: Home,
      },
      props: {
        default: true,
        // function mode, more about it below
        name: (route) => ({ search: route.query.q }),
      },
    },
  ],
  // routes,
});

export default router;
