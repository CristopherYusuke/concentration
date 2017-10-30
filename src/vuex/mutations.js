export default {
  saveUser (state, username) {
    state.username = username
  },
  reset (state, obj) {
    state.cards = obj.cards
  },
  flip (state, card) {
    var c = state.cards.find(cc => cc === card)
    c.flipped = !c.flipped
  }
}
