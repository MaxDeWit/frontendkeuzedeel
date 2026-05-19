<script setup>
import { ref } from 'vue'
import CharacterCard from '/src/components/CharacterCard.vue'

import mrover from '/src/assets/CharacterImages/mrover.png'
import frover from '/src/assets/CharacterImages/frover.png'
import chisa from '/src/assets/CharacterImages/Chisa.png'
import yinlin from '/src/assets/CharacterImages/Yinlin.png'
import calcharo from '/src/assets/CharacterImages/calcharo.png'
import changli from '/src/assets/CharacterImages/changli.png'

const characters = ref([
  { name: "Rover (Male)", description: "The male version of the main protagonist.", image: mrover },
  { name: "Rover (Female)", description: "The female version of the main protagonist.", image: frover },
  { name: "Chisa", description: "A conscientious student from the Startorch Academy.", image: chisa },
  { name: "Yinlin", description: "Once an outstanding Patroller who was suspended from her duties at the Public Security Bureau, Yinlin now pursues hidden evils in secrecy.", image: yinlin },
  { name: "Calcharo", description: "He is a former Exile from the New Federation's Lawless Zone and the leader of the Ghost Hounds.", image: calcharo },
  { name: "Changli", description: "She is the Former Secretary-General of the Central Secretariat in Mingting, the capital, and now serves as Counselor to Jinzhou Magistrate, Jinhsi. Having flourished from an unforgiving childhood, she now stands as a calculated, knowledgeable, and mysterious official and strategist with a keen eye for both political and civilian affairs.", image: changli },
])
</script>

<template>
  <section id="characters" class="section">
    <div class="title">
      <h2>Characters</h2>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

      <CharacterCard 
        v-for="character in characters" 
        :key="character.name"
        :name="character.name" 
        :description="character.description" 
        :image="character.image" 
      />

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
