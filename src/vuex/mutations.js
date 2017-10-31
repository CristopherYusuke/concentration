const flip = (state, card) => {
  let c = state.cards.find(cc => cc === card)
  c.flipped = !c.flipped
}

export default {
  saveUser (state, username) {
    state.username = username
  },
  reset (state, obj) {
    state.cards = obj.cards
  },
  flip,
  flipCards (state, cards) {
    console.log('aquui')
    cards.forEach((card) => flip(state, card))
  }
}
