import { createRouter, createWebHistory } from 'vue-router';

const UserInfo = () => import('@/components/pages/UserInfo.vue');
const LifullHomes = () => import('@/components/pages/LifullHomes.vue');
const DbIndex = () => import('@/components/pages/DbIndex.vue');

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo,
    },
    {
      path: '/lifullHomes',
      name: 'LifullHomes',
      component: LifullHomes,
    },
    {
      path: '/index',
      name: 'index',
      component: DbIndex,
    },
  ]
})