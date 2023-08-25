import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// import BlankLayout from '~/layouts/BlankLayout.vue'
import HomeLayout from '~/layouts/HomeLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeLayout,
    redirect: '/home',
    children: [{ path: '/home', name: 'home', component: () => import('~/pages/Home.vue') }],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
