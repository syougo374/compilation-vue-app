import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '@/routers/MainRouter.js'
import Store from '@/stores/store.js'



router.beforeEach((to,form,next) => {
  if(to.path === '/'){
    next('/userInfo');
	}
	next();
})

createApp(App).use(router).use(Store).mount('#app')
