import { createApp } from 'vue';
import App from './App.vue';
import  router  from './router'; // Assuming your router is exported as 'router' in './router/index.ts'

createApp(App).use(router).mount('#app');
