<template>
  <div class="cards">
    <b-row>
      <h1> Usuário: {{username}} </h1>
    </b-row>
    <b-row>
      <h5>Turnos: {{ turn}}</h5>
    </b-row>
    <b-row>
      <card v-for="(card, index) of cards" :key="index" :option="card" @flipped="onFlipACard" />
    </b-row>
    <b-row>
      <b-button size="lg" variant="secondary" @click="reinitialize()" > Reiniciar</b-button>
    </b-row>
    <b-modal id="modal1" title="Parabéns" :visible='!gameWinner'>
      <p clas="my-4">Parabéns {{username}} seus pontos foram de {{turn}}!</p>
      <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-left" variant="primary" @click="show=false">
          Ver Ranking
        </b-btn>
        <b-btn size="sm" class="float-right" variant="primary" @click="show=false">
          Novo jogo
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import card from '@/components/card'

export default {
  name: 'Cards',
  components: {card},
  data () {
    return {
      lastCard: null
    }
  },
  methods: {
    ...mapActions([
      'flipCards',
      'reset',
      'addTurn',
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
      // this.$router.push({path: '/'})
      let username = this.username
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
