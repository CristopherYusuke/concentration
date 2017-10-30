<template>
  <div id="app">
    <b-container>
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
    ])
  }
}
</script>
