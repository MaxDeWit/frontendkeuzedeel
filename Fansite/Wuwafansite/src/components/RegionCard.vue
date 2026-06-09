<template>
  <div class="col">
    <div class="frame h-100 shadow-sm">
      <div class="frame-header"></div>
      <div class="frame-body d-flex flex-column">

        <img :src="image" :alt="name" class="character-image">

        <h5 class="frame-title">
          {{ name }}
        </h5>

        <p class="frame-text flex-grow-1">
          {{ description }}
        </p>

        <button @click="showModal = true" class="btn btn-outline-primary mt-3">
          More Info
        </button>

      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ name }}</h2>
          <button class="modal-close" @click="showModal = false">&times;</button>
        </div>
        <div class="modal-body">
          <div class="left-side">
            <img :src="character" :alt="name" class="modal-image">
          </div>
          <div class="right-side">
            <p><strong>Attribute:</strong> <img :src="attributePath" :alt="attributeName" class="AttIcon">{{ attributeName }}</p>
            <p><strong>Info:</strong> {{ more }}</p>
            <p><strong>Birthplace:</strong> {{ birthplace }}</p>
          </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  image: String,
})

const showModal = ref(false)
</script>