import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/page1',
    component: Page1,
  },
  {
    path: '/page2',
    component: Page2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
