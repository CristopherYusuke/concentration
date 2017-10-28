<template>
    <div id="user">
        <div class="form-group">
            <label>Nome</label>
            <input class="form-control" type="text" name="" id="">
        </div>
        <router-link class="btn btn-primary" :to="{ path: 'cards' }" >Ir para o jogo</router-link>
    </div>
</template>

<script>
export default {
  name: 'user'
}
</script>

<style scoped  >

</style>
