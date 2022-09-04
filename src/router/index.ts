import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/home'
  },  
  {
    path: '/home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/weekly',
    component: () => import ('../views/Weekly.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
