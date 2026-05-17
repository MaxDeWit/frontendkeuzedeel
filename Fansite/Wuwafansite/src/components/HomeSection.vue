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
        <div class="carousel-item active slide-1">
          <h1>Welcome to Wuthering Waves</h1>
          <button class="btn btn-primary mt-5">Take me there</button>
        </div>
        <div class="carousel-item slide-2">
          <h1>Meet the Characters</h1>
          <button a href="#characters" class="btn btn-primary mt-5">Take me there</button>
        </div>
        <div class="carousel-item slide-3">
          <h1>Explore Regions</h1>
          <button a href="#regions" class="btn btn-primary mt-5">Take me there</button>
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

<style scoped>
.section {
  padding: 0;
}

.carousel-inner {
  min-height: 320px;
  overflow: hidden;
}

.carousel-item {
  min-height: 320px;
}

.carousel-item h1 {
  text-align: center;
}

.slide-1 {
  background-color: rgb(53, 53, 54);
  color: white;
  width: 120vh;
}

.slide-2 {
  background-color: rgb(53, 53, 54);
  color: white;
  width: 120vh;
}

.slide-3 {
  background-color: rgb(53, 53, 54);
  color: white;
  width: 120vh;
}


@media (max-width: 768px) {
  .carousel-item {
    height: 220px;
  }

  .carousel-caption {
    min-height: 220px;
  }
}
</style>
