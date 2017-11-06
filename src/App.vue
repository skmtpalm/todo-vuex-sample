<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './compoments/Header.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma";
</style>
