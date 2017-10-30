<template>
  <div class="container" v-on:click="flip">
    <div class="card" v-bind:class="{ flipped: option.flipped }">
    </div>
  </div>
</template>

<script>
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
    flip () {
      console.log('teste')
    }
  }
}
</script>

<style>

.card {
  width: 100px;
  height: 100px;

}

.blue {
  background-color: var(--blue);
}

</style>

