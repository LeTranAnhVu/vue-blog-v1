import Vue from 'vue';
import VueRouter from 'vue-router';


// components
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Blog from './pages/Blog.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/blog',
    component: Blog,
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
