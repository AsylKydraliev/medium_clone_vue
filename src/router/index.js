import { createRouter, createWebHashHistory } from 'vue-router';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import GlobalFeed from '@/views/GlobalFeed.vue';

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: GlobalFeed,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: GlobalFeed,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: GlobalFeed,
  },
  {
    path: '/article/new',
    name: 'createArticle',
    component: GlobalFeed,
  },
  {
    path: '/articles/:slug',
    name: 'article',
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
  },
  {
    path: '/settings',
    name: 'settings',
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
