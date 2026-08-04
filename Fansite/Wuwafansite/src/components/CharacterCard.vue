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
  description: String,
  image: String,
  more: String,
  attributePath: String,
  attributeName: String,
  character: String,
  birthplace: String
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
  font-family: 'Poppins', sans-serif;
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
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.frame-text {
  font-family: 'Poppins', sans-serif;
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
  padding: 1rem;
  overflow-y: auto;
}

.modal-content {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
  max-height: 90vh;
  overflow-y: auto;
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
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 1rem;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
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
  gap: 3rem;
  align-items: center;
}

.left-side {
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

.right-side {
  flex: 1;
  min-width: 0;
}

@media (max-width: 768px) {
  .frame-title {
    font-size: 1.1rem;
  }

  .frame-text {
    font-size: 0.95rem;
  }

  .modal-body {
    gap: 1.5rem;
  }

  .left-side {
    flex: 0 0 200px;
    min-height: 200px;
  }

  .right-side p {
    font-size: 0.95rem;
  }
}

.modal-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  margin: 0;
}

.AttIcon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.modal-body p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.modal-body p strong {
  color: #333;
  font-weight: 600;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px solid #f0f0f0;
}

@media (max-width: 768px) {
  .modal-content {
    padding: 1.5rem;
    max-height: 95vh;
  }

  .modal-header h2 {
    font-size: 1.25rem;
  }

  .modal-body {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  .left-side {
    flex: 1 1 100%;
    width: 100%;
    min-height: auto;
    order: -1;
  }

  .right-side {
    flex: 1 1 100%;
    width: 100%;
  }

  .modal-image {
    max-width: 250px;
  }

  .modal-body p {
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 1rem;
    border-radius: 0.75rem;
  }

  .modal-overlay {
    padding: 0.5rem;
  }

  .modal-header {
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
  }

  .modal-header h2 {
    font-size: 1.1rem;
  }

  .modal-close {
    font-size: 1.5rem;
  }

  .left-side {
    min-height: auto;
    order: -1;
  }

  .modal-image {
    max-width: 200px;
  }

  .modal-body p {
    font-size: 0.9rem;
  }

  .modal-body {
    gap: 1rem;
  }
}
</style>