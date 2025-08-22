import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// Bootstrap CSS & optional JS (for components like dropdowns, navbar toggler)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './global.css';
import './theme.css';
import '@/styles/ageGate.css';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import TeamPage from './pages/TeamPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ContactPage from './pages/ContactPage.vue';
import AgeGate from '@/pages/AgeGate.vue';
import { useAgeGate } from '@/composables/useAgeGate';

const routes = [
  { path: '/', component: HomePage },
  { path: '/puphighschool', component: HomePage },
  { path: '/team', component: TeamPage },
  { path: '/products', component: ProductsPage },
  { path: '/contact', component: ContactPage },
  { path: '/age-gate', name: 'AgeGate', component: AgeGate }
];


const router = createRouter({ history: createWebHistory(), routes });

// 全域守衛：若未通過且非年齡頁，導去 /age-gate
router.beforeEach((to, from, next) => {
  const { isAccepted } = useAgeGate();
  if (!isAccepted() && to.path !== '/age-gate') {
    return next({ path: '/age-gate', query: { redirect: to.fullPath } });
  }
  next();
});

const app = createApp(App);
app.use(router).mount('#app');
