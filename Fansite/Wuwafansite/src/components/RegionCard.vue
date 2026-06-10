<template>
  <div class="col">
    <div class="frame h-100 shadow-sm">
      <div class="frame-header"></div>
      <div class="frame-body d-flex flex-column">

        <img :src="image" :alt="name" class="region-image">

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
          <div class="top-side">
            <img :src="image" :alt="regionname" class="sidebar-image">
          </div>
          <div class="bottom-side">
            <p><strong>Description:</strong> {{ more }}</p>
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
  description: String,
  more: String,
  regionname: String,
})

const showModal = ref(false)
</script>

<style scoped>
.region-image {
  width: 100%;
  height: 24vh;
  object-fit: cover;
  margin: 0 auto;
}

@media (max-width: 768px) {
  :deep(.frame-title) {
    font-size: 1.1rem;
  }

  :deep(.frame-text) {
    font-size: 0.95rem;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
}

.modal-content {
  background: white;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  flex-shrink: 0;
}

.modal-header h2 {
  margin: 0;
  font-size: 22px;
}

.modal-close {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.modal-close:hover {
  background-color: #f0f0f0;
  color: #000;
}

.modal-body {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex: 1;
  padding: 20px;
  gap: 16px;
}

.top-side {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-side .sidebar-image {
  max-width: 100%;
  height: auto;
  max-height: 280px;
  object-fit: contain;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bottom-side {
  flex-shrink: 0;
}

.bottom-side p {
  margin: 0;
  line-height: 1.6;
  color: #333;
  font-size: 14px;
}

.bottom-side strong {
  color: #222;
  font-weight: 600;
}

.modal-footer {
  border-top: 1px solid #e0e0e0;
  padding: 16px 20px;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 12px;
  }

  .modal-content {
    max-width: 100%;
    max-height: 85vh;
  }

  .modal-header {
    padding: 16px;
  }

  .modal-header h2 {
    font-size: 18px;
  }

  .top-side .sidebar-image {
    max-height: 220px;
  }

  .modal-body {
    padding: 16px;
    gap: 12px;
  }

  .bottom-side p {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    max-height: 80vh;
  }

  .modal-header {
    padding: 12px 16px;
  }

  .modal-header h2 {
    font-size: 16px;
  }

  .modal-close {
    width: 28px;
    height: 28px;
    font-size: 24px;
  }

  .modal-body {
    padding: 12px 16px;
    gap: 12px;
  }

  .top-side .sidebar-image {
    max-height: 180px;
  }

  .bottom-side p {
    font-size: 12px;
  }
}
</style>