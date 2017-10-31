<template>
  <div class="cards">
    <b-row>
      <h1> Usuário: {{username}} </h1>
    </b-row>
    <b-row>
      <h5>Turnos: {{ turn}}</h5>
    </b-row>
    <b-row v-if="!gameWinner">
      <card v-for="(card, index) of cards" :key="index" :option="card" @flipped="onFlipACard"  />
    </b-row>
    <b-row>
      <b-button  variant="secondary" @click="reinitialize()" > Reiniciar</b-button>
    </b-row>
    <b-modal ref="modal" :hide-header="true" :hide-footer="true" body-bg-variant="success" body-text-variant="light" :visible='gameWinner'>
      <h1 clas="my-4">Parabéns {{username}} você resolveu o jogo em {{turn}} rodadas!</h1>
        <b-btn size="sm" class="float-left" variant="primary" @click="goToRanking">
          Ver Ranking
        </b-btn>
        <b-btn size="sm" class="float-right" variant="primary" @click="restart">
          Novo jogo
        </b-btn>
    </b-modal>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import card from '@/components/card'

export default {
  name: 'Cards',
  components: {card},
  methods: {
    ...mapActions([
      'flipCards',
      'reset',
      'addTurn',
      'addRank',
      'match'
    ]),
    onFlipACard (flippedCard) {
      if (!this.lastCard) {
        this.lastCard = flippedCard
      } else {
        this.addTurn()
        if (this.lastCard.cardName === flippedCard.cardName) {
          this.lastCard = null
          this.match()
          if (this.gameWinner) {
            let {username, turn} = this
            this.addRank({
              username,
              turn
            })
          }
        } else {
          let lastCard = this.lastCard
          this.lastCard = null
          setTimeout(() => {
            this.flipCards([lastCard, flippedCard])
          }, 750)
        }
      }
    },
    reinitialize () {
      this.$router.push({path: '/'})
      this.reset()
    },
    goToRanking () {
      this.$router.push({path: '/ranking'})
      this.$refs.modal.hide()
      this.reset()
    },
    restart () {
      let username = this.username
      this.$refs.modal.hide()
      this.reset({username})
    }
  },
  computed: {
    ...mapGetters([
      'username',
      'turn',
      'gameWinner',
      'cards'
    ])
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  margin-bottom:20px;
}

.cards {
  width: 485px;
  margin: 0 auto;
}
button {
  margin-top: 10px;
}

</style>
