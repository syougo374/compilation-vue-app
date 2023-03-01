import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/routers/MainRouter.js';
import Store from '@/stores/store.js';

createApp(App).use(router).use(Store).mount('#app')
