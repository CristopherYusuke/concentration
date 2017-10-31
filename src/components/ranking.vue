<template>
  <div id="ranking">
    <h1 class="text-center">Ranking</h1>
    <b-table striped hover :items="lstRank" :fields="fields"></b-table>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Ranking',
  data () {
    return {
      lstRank: [],
      fields: [
        {
          key: 'index',
          label: 'Colocação'

        },
        {
          key: 'username',
          label: 'Nome Usuario'
        },
        {
          key: 'turn',
          label: 'Qtde. Rodadas'
        }
      ]
    }
  },
  methods: {
    refactory () {
      return this.ranks
        .sort((a, b) => a.turn - b.turn)
        .map((rank, index) => ({ ...rank, index: (index + 1) + 'º' }))
    }
  },
  mounted () {
    this.lstRank = this.refactory()
  },
  computed: {
    ...mapGetters([
      'ranks'
    ])
  }
}
</script>
<style scoped>

</style>

