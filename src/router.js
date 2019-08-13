/* eslint-disable no-console */
import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(`./views/Home.vue`);
const About = () => import(`./views/About.vue`);

// import Home from './views/Home.vue';
// import About from './views/About.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: `/`,
      name: `home`,
      component: Home,
      meta: { componentLayout: `LayoutDefault` },
    },
    {
      path: `/about`,
      name: `about`,
      component: About,
      meta: { componentLayout: `LayoutNoFooter` },
    },
  ],
  mode: `history`,
});

router.beforeEach((to, from, next) => {
  if (!Vue.options.components[to.meta.componentLayout]) {
    Vue.component(to.meta.componentLayout, () =>
      import(`./layouts/${to.meta.componentLayout}.vue`));
  }
  next();
});

export default router;
