<template>
  <section id="home" class="section">
    <div id="homeCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active"
          aria-current="true"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active" :style="{ backgroundImage: `url(${slideBackgrounds.one})` }">
          <div class="carousel-content">
            <h1>Welcome to Wuthering Waves</h1>
          </div>
        </div>
        <div class="carousel-item" :style="{ backgroundImage: `url(${slideBackgrounds.two})` }">
          <div class="carousel-content">
            <h1>Meet the Characters</h1>
            <a href="#characters" class="btn btn-primary mt-5">Take me there</a>
          </div>
        </div>
        <div class="carousel-item" :style="{ backgroundImage: `url(${slideBackgrounds.three})` }">
          <div class="carousel-content">
            <h1>Explore Regions</h1>
            <a href="#regions" class="btn btn-primary mt-5">Take me there</a>
          </div>
        </div>
      </div>

      <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
import wuwabg1 from '../assets/wuwabg1.png'
import wuwabg2 from '../assets/wuwabg2.png'
import wuwabg3 from '../assets/wuwabg3.png'

export default {
  data() {
    return {
      slideBackgrounds: {
        one: wuwabg1,
        two: wuwabg2,
        three: wuwabg3
      }
    }
  }
}
</script>

<style scoped>
.section {
  padding: 0;
}

.carousel-inner {
  min-height: 320px;
  overflow: hidden;
  background-color: rgb(53, 53, 54);
  border-radius: 0 0 20px 20px;
}

.carousel-item {
  min-height: 320px;
  background-color: rgb(53, 53, 54);
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-content {
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  isolation: isolate;
}

.carousel-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.2));
  z-index: -1;
}

.carousel-item h1 {
  text-align: center;
  margin: 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  .carousel-item,
  .carousel-content {
    min-height: 220px;
  }
}
</style>