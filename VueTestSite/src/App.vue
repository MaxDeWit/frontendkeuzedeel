<template>
  <div>
    <nav>
      <router-link to="/">Pagina 1</router-link>
      <router-link to="/pagina2">Pagina 2</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #eee;
}
</style>