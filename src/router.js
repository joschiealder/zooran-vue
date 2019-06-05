import Vue from 'vue'
import Router from 'vue-router'
import Zoo from './views/Zoo.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'zoo',
      component: Zoo
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
})
