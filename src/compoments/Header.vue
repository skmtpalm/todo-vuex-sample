<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          :to="{ name: 'home'}"><strong>TODOEX</strong></router-link>
        <div class="navbar-item">
          <search-bar></search-bar>
        </div>
        <div
            class="navbar-burger burger"
            :class="toggleMenu"
            data-target="navMenu"
            @click="isMenuOpen = !isMenuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" id="navMenu" :class="toggleMenu">
        <div class="navbar-end">
          <router-link
            class="navbar-item"
            :to="{ name: 'tasks'}">Inbox</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue'
export default {
  components: {
    SearchBar
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  computed: {
    toggleMenu() {
      return {'is-active': this.isMenuOpen}
    }
  }

}
</script>

<style lang="css">
</style>
