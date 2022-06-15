<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>
<script>
export default {
  beforeCreate: async function(){
    await this.$store.dispatch('web3s/init')
  }
}
</script>
<style>
</style>
