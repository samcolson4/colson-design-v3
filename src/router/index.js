import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signposts-ar',
    name: 'Signposts AR',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "signpostsAR" */ '../views/SignpostsAR.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/github',
    beforeEnter() {location.href = 'http://github.com/samcolson4'}
}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
