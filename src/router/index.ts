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
          path: '',
          name: 'footer',
          component: () => import('../views/home/footer/index.vue')
        },
        {
          path: 'userInfo',
          name: 'userInfo',
          component: () => import('../views/home/userInfo/index.vue')
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('../views/home/search/index.vue')
        },
        {
          path: 'friends',
          name: 'friends',
          component: () => import('../views/home/friends/index.vue')
        }, {
          path: 'setting',
          name: 'setting',
          component: () => import('../views/home/setting/index.vue')
        }

      ]
    }
  ]
})

export default router
