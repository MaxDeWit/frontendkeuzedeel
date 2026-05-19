<script setup>
import CharacterCard from '/src/components/CharacterCard.vue'

import mrover from '/src/assets/CharacterImages/mrover.png'
import frover from '/src/assets/CharacterImages/frover.png'
import chisa from '/src/assets/CharacterImages/Chisa.png'
</script>

<template>
  <section id="characters" class="section">
    <div class="title">
      <h2>Characters</h2>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">

      <CharacterCard name="Rover" description="The male version of the main protagonist." :image="mrover" />

      <CharacterCard name="Rover" description="The female version of the main protagonist." :image="frover" />

      <CharacterCard name="Chisa" description="A conscientious student from the Startorch Academy." :image="chisa" />

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
