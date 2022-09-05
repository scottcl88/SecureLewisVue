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
  {
    path: '/tips',
    component: () => import ('../views/Tips.vue')
  },
  {
    path: '/thingstoknow',
    component: () => import ('../views/ThingsToKnow.vue')
  },
  {
    path: '/legal',
    component: () => import ('../views/Legal.vue')
  },
  {
    path: '/error',
    component: () => import ('../views/Error.vue')
  },
  {
    path: '/future',
    component: () => import ('../views/Future.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
