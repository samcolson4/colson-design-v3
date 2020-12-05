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
    path: '/projects',
    name: 'Projects',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/github',
    beforeEnter() {
      location.href = 'http://github.com/samcolson4';
    }
  },
  {
    path: '/linkedin',
    beforeEnter() {
      location.href = 'https://www.linkedin.com/in/samcolson/';
    }
  },
  {
    path: '/projects/signposts-ar',
    name: 'Signposts AR',
    component: () =>
      import('../views/projects/SignpostsAR.vue')
  },
  {
    path: '/projects/acebook',
    name: 'Acebook',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/projects/Acebook.vue')
  },
  {
    path: '/projects/about-colson-design',
    name: 'Acebook',
    component: () =>
      import(/* webpackChunkName: "projects" */ '../views/projects/colson-design.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
