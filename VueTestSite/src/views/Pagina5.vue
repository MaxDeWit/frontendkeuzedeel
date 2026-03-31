<template>
  <div>
    <h1>Dit is Pagina 5</h1>
    <p>Welkom op de vijfde pagina.</p>

    <input v-model="naam" placeholder="Typ je naam" />
    <p>Hallo {{ naam }}</p>

    <p>{{ volledigeNaam }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const voornaam = ref('Max')
const achternaam = ref('Bami')

const volledigeNaam = computed(() => {
  return voornaam.value + ' ' + achternaam.value
})

const naam = ref('gast')
</script>