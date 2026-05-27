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
            <p>{{ more }}</p>
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
  description: String,
  image: String,
  more: String,
  character: String
})

const showModal = ref(false)
</script>

<style scope>
.character-image {
  width: 16vh;
  height: 16vh;
  object-fit: cover;
  margin: 0 auto;
}

.frame {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 350px;

  transition: 0.3s;
}

.frame:hover {
  transform: translateY(-5px);
}

.frame-header {
  height: 1rem;
  background: linear-gradient(135deg, #007bff, #6610f2);
}

.frame-body {
  padding: 1.5rem;
}

.frame-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.frame-text {
  color: #555;
  height: 4rem;
  overflow-y: auto;
}

.btn {
  margin-top: auto;
  margin-bottom: 1rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #999;
  transition: color 0.2s;
}

.modal-close:hover {
  color: #333;
}

.modal-body {
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1.5rem;
}

.left-side {
  flex: 1;
}

.right-side {
  flex: 1;
}

.modal-image {
  width: 250px;
  height: 350px;
  border-radius: 16px;
  object-fit: contain;
  margin-bottom: 1.5rem;
}

.modal-body p {
  color: #555;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
</style>