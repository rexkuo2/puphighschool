import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './global.css';
import App from './App.vue';
import HomePage from './pages/HomePage.vue';
import TeamPage from './pages/TeamPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ContactPage from './pages/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/team', component: TeamPage },
  { path: '/products', component: ProductsPage },
  { path: '/contact', component: ContactPage },
];

const router = createRouter({ history: createWebHistory(), routes });

const app = createApp(App);
app.use(router).mount('#app');
