<template>
  <div>
    <nav>
      <router-link to="/">Pagina 1</router-link>
      <router-link to="/pagina2">Pagina 2</router-link>
      <router-link to="/pagina3">Pagina 3</router-link>
      <router-link to="/pagina4">Pagina 4</router-link>
      <router-link to="/pagina5">Pagina 5</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #796969;
}
</style>

<script setup>
</script>
