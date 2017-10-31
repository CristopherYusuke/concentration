const cardColor = ['Blue', 'Indigo', 'Purple', 'Pink', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Cyan']

const shuffle = function (arr) {
  var newArr = arr.slice()
  for (let i = newArr.length; i; i -= 1) {
    let j = Math.floor(Math.random() * i)
    let x = newArr[i - 1]
    newArr[i - 1] = newArr[j]
    newArr[j] = x
  }
  return newArr
}

export default {
  saveUser ({commit}, username) {
    let name = username.charAt(0).toUpperCase() + username.slice(1)
    commit('saveUser', name)
  },
  reset ({commit}) {
    commit('reset', {
      turn: 0,
      cards: shuffle(cardColor.concat(cardColor)).map(name => ({flipped: false, cardName: name}))
    })
  },
  flipCard ({commit}, card) {
    commit('flip', card)
  },
  flipCards ({commit}, cards) {
    commit('flipCards', cards)
  },
  addTurn ({commit}) {
    commit('addTurn')
  },
  match ({commit}) {
    commit('verifyGameScore')
  }
}
