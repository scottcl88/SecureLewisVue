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
    path: '/websites',
    component: () => import ('../views/Websites.vue')
  },
  {
    path: '/redflags',
    component: () => import ('../views/RedFlags.vue')
  },
  {
    path: '/passwords',
    component: () => import ('../views/Passwords.vue')
  },
  {
    path: '/physical',
    component: () => import ('../views/Physical.vue')
  },
  {
    path: '/incidentresponse',
    component: () => import ('../views/IncidentResponse.vue')
  },
  {
    path: '/securesetup',
    component: () => import ('../views/SecureInfoSetup.vue')
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
