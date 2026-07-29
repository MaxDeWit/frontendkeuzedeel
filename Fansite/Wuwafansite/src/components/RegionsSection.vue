<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import RegionCard from './RegionCard.vue'
import RegionSummary from './RegionSummary.json'

const visibleCount = ref(6)

const updateVisibleCount = () => {
  visibleCount.value = window.innerWidth < 768 ? 3 : 6
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateVisibleCount)
})

const visibleRegions = computed(() => RegionSummary.slice(0, visibleCount.value))

const showMore = () => visibleCount.value += 6;


const showLess = () => visibleCount.value = window.innerWidth < 768 ? 3 : 6;

</script>

<template>
  <section id="regions" class="section">
    <div class="title">
      <h2>Regions</h2>
    </div>
    <div class="row row-cols-1 row-cols-lg-3 g-4">

      <RegionCard 
        v-for="region in visibleRegions"
        :key="region.name"
        :name="region.name" 
        :description="region.description"
        :image="`/src/assets/RegionImages/${region.image}.png`" 
      />

    </div>
    <div class="see-more-container">
      <button v-if="visibleCount < RegionSummary.length" class="btn btn-primary mt-4" @click="showMore">
        See More Regions
      </button>
      <button v-if="visibleCount > 6" class="btn btn-outline-primary mt-4 ms-2" @click="showLess">
        Show Less
      </button>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 3rem 2rem;
  border-bottom: 1px solid #eee;
  max-width: 100%;
  box-sizing: border-box;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem;
  }

  h2 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
