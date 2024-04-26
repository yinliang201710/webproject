import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Index from '../views/home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'login' }
    },
    {
      path: '/view',
      name: 'view',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../views/header/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue'),
      children: [
        {
          path: 'busisese',
          name: 'busisese',
          component: () => import('../views/home/busisese/index.vue')
        }
      ]
    }
  ]
})

export default router
