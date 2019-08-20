import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: () => import('../views/MSite/MSite.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/Order/Order.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile/Profile.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search/Search.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    }
  ]
})
