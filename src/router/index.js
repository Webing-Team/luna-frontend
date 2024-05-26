import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/chat',
      component: () => import('../views/Chat.vue')
    },
    {
      path: '/settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/login',
      component: () => import('../components/auth/LogIn.vue')
    },
    {
      path: '/signUp',
      component: () => import('../components/auth/SingUp.vue')
    },
    {
      path: '/forgotPassword',
      component: () => import('../components/auth/ForgotPassword.vue')
    }

  ]
})

export default router;