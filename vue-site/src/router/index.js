import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import AgeGate from '@/pages/AgeGate.vue';
import { useAgeGate } from '@/composables/useAgeGate';

const routes = [
  { path: '/puphighschool', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/age-gate', name: 'AgeGate', component: AgeGate }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全域守衛：若未通過且非年齡頁，導去 /age-gate
router.beforeEach((to, from, next) => {
  const { isAccepted } = useAgeGate();
  if (!isAccepted() && to.path !== '/age-gate') {
    return next({ path: '/age-gate', query: { redirect: to.fullPath } });
  }
  next();
});

export default router;