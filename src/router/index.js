import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/cards'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/',
      name: 'User',
      component: User
    }
  ]
})
