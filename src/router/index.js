import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/cards'
import User from '@/components/user'
import Ranking from '@/components/ranking'

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
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    }
  ]
})
