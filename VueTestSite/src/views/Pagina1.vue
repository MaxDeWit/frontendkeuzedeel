<!-- <template>
  <div>
    <h1>Dit is Pagina 1</h1>
    <p>Welkom op de eerste pagina.</p>

    <h1>{{ titel }}</h1>
    <div class="afbeeldingBox">
    <img :src="afbeelding" alt="March7th">
  </div>
  </div>
</template>

<script setup>

import testAfbeelding from '../assets/MarchIcon.png'

const titel = 'March7th'
const afbeelding = testAfbeelding
</script> -->

<template>
  <div class="container mt-1">
    <h1 class="text-center mb-3">{{ titel }}</h1>

    <div class="card p-3 shadow">
      <div class="afbeeldingBox">
      <img :src="afbeelding" class="img-fluid rounded" alt="test afbeelding">
    </div>
    </div>
  </div>
</template>

<script setup>

import testAfbeelding from '../assets/MarchIcon.png'
const titel = 'Welkom'
const afbeelding = testAfbeelding
</script>