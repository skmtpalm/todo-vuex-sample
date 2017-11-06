<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          :to="{ name: 'home'}">Todoex</router-link>
      </div>
      <div class="navbar-menu">
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
export default {
}
</script>

<style lang="css">
</style>
