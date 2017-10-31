<template>
  <div class="cards">
    <b-row>
      <h1> Usuário: {{username}} </h1>
    </b-row>
    <b-row>
      <card v-for="(card, index) of cards" :key="index" :option="card" @flipped="onFlipACard"    />
    </b-row>
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
      'match'
    ]),
    onFlipACard (flippedCard) {
      if (!this.lastCard) {
        this.lastCard = flippedCard
      } else if (this.lastCard.cardName === flippedCard.cardName) {
        this.lastCard = null
        this.match()
      } else {
        let lastCard = this.lastCard
        this.lastCard = null
        setTimeout(() => {
          this.flipCards([lastCard, flippedCard])
        }, 1000)
      }
    }
  },
  mounted () {
  },
  computed: {
    ...mapGetters([
      'username',
      'cards'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin-bottom:20px;
}

.cards {
  width: 580px;
  margin: 0 auto;
}

</style>
