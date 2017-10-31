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
    state.turn = obj.turn
  },
  flip,
  flipCards (state, cards) {
    console.log('aquui')
    cards.forEach((card) => flip(state, card))
  },
  addTurn (state) {
    state.turn++
  },
  verifyGameScore (state) {
    let hasFalseCard = state.cards.some(card => card.flipped)
    console.log('veryfiGame', hasFalseCard)
  }
}
