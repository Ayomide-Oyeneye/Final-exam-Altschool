import '../styles.css';
import Home from '../routes/Home.vue';
import FAQ from '../routes/FAQ.vue';
import About from '../routes/About.vue';
import FourzeroFourPage from '../routes/FourzeroFourPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/FAQ', component: FAQ },
    { path: '/', component: Home },
    { path: '/About', component: About},
    { path: '/:pathMatch(.*)*', component: FourzeroFourPage }
    // { path: '/Signup', component: Signup }
  ]
});
export default router