<script setup>
import HomeSection from '../components/HomeSection.vue'
import CharactersSection from '../components/CharactersSection.vue'
import RegionsSection from '../components/RegionsSection.vue'
import AboutSection from '../components/AboutSection.vue'
</script>

<template>
  <div class="home">
    <header>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <HomeSection />
    <CharactersSection />
    <RegionsSection />
    <AboutSection />
    </header>
  </div>
</template>

<style scoped>
.home {
  padding: 0;
}
</style>
