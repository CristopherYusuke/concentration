<template>
  <div class="card" v-on:click="flip">
    <div class="card-container" v-bind:class="{ flipped: option.flipped }">
    </div>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: 'card',
  props: {
    option: {
      type: Object,
      default () {
        return {
          flipped: false,
          cardName: ''
        }
      }
    }
  },
  methods: {
    ...mapActions([
      'flipCard'
    ]),
    flip () {
      if (this.option.flipped) {
        return
      }
      this.flipCard(this.option)
    }
  }
}
</script>

<style>
.card{
    width: 100px;
    height: 100px;
    margin: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
}
.card-container {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.card-container.flipped {
    transform: rotateY( 180deg );
}

.blue {
  background-color: var(--blue);
}

</style>

