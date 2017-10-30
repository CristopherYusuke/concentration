<template>
  <div class="card-container" v-on:click="flip">
    <div class="card" v-bind:class="{ flipped: option.flipped}">
      <div class="front" :style="`background-color: var(--${option.cardName.toLowerCase()})` " >
        <p>{{ option.cardName }}</p>
      </div>
      <div class="back " ></div>
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
.card-container{
    width: 100px;
    height: 100px;
    margin: 3px;
    cursor: pointer;
    position: relative;
    perspective: 800px;
}
.card {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.card.flipped {
    transform: rotateY( 180deg );
}

.back, .front {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background:whitesmoke;
  transform: rotateY( 0deg );
}

.card .front {
  transform: rotateY( 180deg );
}
.front p {
  line-height: 14px;
  height: 100px;
  width: 100px;
  margin: 0px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 10px;
}
.Blue {
  background-color: var(--blue);
}
.Indigo {
  background-color: var(--indigo);
}
.Purple{
  background-color: var(--purple);
}
.Yellow{
  background-color: var(--yellow);
}
.Pink{
  background-color: var(--pink)
}
.Teal{
  background-color: var(--teal)
}
.Red{
  background-color: var(--red)
}
.Green{
  background-color: var(--green)
}
.Orange{
  background-color: var(--orange)
}
.Cyan{
  background-color: var(--cyan)
}

</style>

