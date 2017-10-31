const flip = (state, card) => {
  let c = state.cards.find(cc => cc === card)
  c.flipped = !c.flipped
}

export default {
  saveUser (state, username) {
    state.username = username
  },
  reset (state, obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        state[key] = obj[key]
      }
    }
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
    state.gameWinner = state.cards.every(card => card.flipped)
  }
}
