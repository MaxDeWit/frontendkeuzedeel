<script setup>
import HomeSection from '../components/HomeSection.vue'
import CharactersSection from '../components/CharactersSection.vue'
import RegionsSection from '../components/RegionsSection.vue'
import AboutSection from '../components/AboutSection.vue'
</script>

<template>
  <div class="home">
    <HomeSection />
    <CharactersSection />
    <RegionsSection />
    <AboutSection />
  </div>
</template>

<style scoped>
.home {
  padding: 0;
}
</style>
