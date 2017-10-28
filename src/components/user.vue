<template>
    <div id="user">
        <div class="form-group">
            <label>Nome</label>
            <input class="form-control" type="text" v-model="username">
        </div>
        <button class="btn btn-primary" @click="salvarUsuario()" >Ir para o jogo</button>
    </div>
</template>
<script>

import { mapActions } from 'vuex'

export default {
  name: 'user',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    salvarUsuario () {
      this.saveUser(this.username)
      this.$router.push({ path: 'cards' })
    },
    ...mapActions([
      'saveUser'
    ])
  }
}
</script>

<style scoped  >

</style>
