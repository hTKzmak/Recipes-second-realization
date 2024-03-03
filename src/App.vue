<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorite">Favorite</RouterLink>
      </nav>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>

</template>

<style>
header {
  padding: 50px;
  background-color: aliceblue;
}

nav {
  display: flex;
  justify-content: space-around;
}
</style>
