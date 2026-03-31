<template>
  <div>
    <h1>Dit is Pagina 2</h1>
    <p>Welkom op de tweede pagina.</p>

    <button @click="count++">
    Count is: {{ count }}
  </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>