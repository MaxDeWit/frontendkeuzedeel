<script setup>
import { ref, computed } from 'vue'
import CharacterCard from '/src/components/CharacterCard.vue'

import CharacterSummary from './CharacterSummary.json'

const visibleCount = ref(6)
const visibleCharacters = computed(() => CharacterSummary.slice(0, visibleCount.value))

const showMore = () => visibleCount.value += 6;


const showLess = () => visibleCount.value = 6;

</script>

<template>
  <section id="characters" class="section">
    <div class="title">
      <h2>Characters</h2>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

      <CharacterCard 
        v-for="character in visibleCharacters" 
        :key="character.name"
        :name="character.name" 
        :description="character.description" 
        :image="`/src/assets/CharacterImages/${character.image}.png`" 
      />

    </div>
    <div class="see-more-container">
      <button v-if="visibleCount < CharacterSummary.length" class="btn btn-primary mt-4" @click="showMore">
        See More Characters
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

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

p {
  color: #666;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 0;
}

.see-more-container {
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>