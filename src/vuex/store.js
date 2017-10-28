import vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

vue.use(Vuex)

const state = {
  username: '',
  turn: 0,
  cards: []

}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
