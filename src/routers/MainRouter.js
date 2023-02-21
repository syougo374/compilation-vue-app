import { createRouter, createWebHistory } from 'vue-router';

const AtHome = () => import('@/components/pages/AtHome.vue');
const TestPage = () => import('@/components/pages/TestPage.vue');
const LifullHomes = () => import('@/components/pages/LifullHomes.vue');

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AtHome,
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage,
    },
    {
      path: '/lifullHomes',
      name: 'LifullHomes',
      component: LifullHomes,
    },
  ]
})