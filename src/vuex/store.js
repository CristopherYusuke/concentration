import vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

vue.use(Vuex)
const localStoragePlugin = (store) => {
  store.subscribe((mutation, state) => {
    localStorage.setItem('state', JSON.stringify(state))
  })
}

const state = {
  username: '',
  turn: 0,
  gameWinner: false,
  cards: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  plugins: [localStoragePlugin]
})
