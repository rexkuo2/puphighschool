import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// Bootstrap CSS & optional JS (for components like dropdowns, navbar toggler)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './global.css';
import './theme.css';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import TeamPage from './pages/TeamPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/puphighschool', component: HomePage },
  { path: '/team', component: TeamPage },
  { path: '/products', component: ProductsPage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({ history: createWebHistory(), routes });

const app = createApp(App);
app.use(router).mount('#app');
