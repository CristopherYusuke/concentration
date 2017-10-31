<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand @click="goTo('/')" >Home</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item @click="goTo('/')">Rank</b-nav-item>
          <b-nav-item @click="goTo('/cards')">Jogo</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <b-container id="content">
      <router-view/>
    </b-container>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'app',
  created () {
    this.reset()
  },
  methods: {
    ...mapActions([
      'reset'
    ]),
    goTo (path) {
      this.$router.push({path})
    }
  }
}
</script>
<style scoped>
#content{
  margin-top:20px;
}
</style>
