import Vue from 'vue';
import VueRouter from 'vue-router';


// components
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Blog from './pages/Blog/Blog.vue';
import BlogCreate from './pages/Blog/Create.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About',
    },
  },
  {
    path: '/blog/:id?',
    name: 'blog',
    component: Blog,
    meta: {
      title: 'Blog',
    },
  },
  {
    path: '/create-blog',
    name: 'create-blog',
    component: BlogCreate,
    meta: {
      title: 'Create a blog',
    },
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
