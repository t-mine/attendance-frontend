import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login';
import WorkTable from '@/pages/WorkTable';
import Page2 from '@/pages/Page2';
import Store from '@/store/index.js';

const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/work-table',
    name: 'work-table',
    component: WorkTable,
    meta: { requiresAuth: true },
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // TODO トークンが有効かチェック
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !Store.state.token
  ) {
    next({ path: '/login', query: { redirect: to.fullPath } });
  } else {
    next();
  }
});

export default router;
