export default {
  saveUser ({commit}, username) {
    let name = username.charAt(0).toUpperCase() + username.slice(1)
    commit('saveUser', name)
  }
}
