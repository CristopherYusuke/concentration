<template>
  <div class="cards">
    <b-row>
      <h1> Usuário: {{username}} </h1>
    </b-row>
    <b-row>
      <card v-for="(card, index) of cards" :key="index" :option="card" @click="flipped"    />
    </b-row>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import card from '@/components/card'

export default {
  name: 'Cards',
  components: {card},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    flipped () {
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
