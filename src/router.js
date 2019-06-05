import Vue from 'vue'
import Router from 'vue-router'
import Zoo from './views/Zoo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'zoo',
      component: Zoo
    }
    // TODO: Füge eine Route für die Komponenten Admin.vue hinzu (vergesse nicht diese zu importieren )
  ]
})
