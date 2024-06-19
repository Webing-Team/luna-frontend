import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/Chat.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/auth/LogIn.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../components/auth/SingUp.vue')
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('../components/auth/ForgotPassword.vue')
    },
  ]
})

export default router;