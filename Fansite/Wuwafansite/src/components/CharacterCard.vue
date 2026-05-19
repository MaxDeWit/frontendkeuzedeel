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

        <a href="#" class="btn btn-outline-primary mt-3">
          More Info
        </a>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  image: String
})
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
</style>