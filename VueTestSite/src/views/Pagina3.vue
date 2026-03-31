<template>
  <div>
    <h1>Dit is Pagina 3</h1>
    <p>Welkom op de derde pagina.</p>
  </div>

   <p v-if="isIngelogd">Welkom terug</p>
  <p v-else>Log eerst in</p>
</template>

<script setup>
const isIngelogd = true
</script>