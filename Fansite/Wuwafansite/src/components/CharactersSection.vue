<template>
  <section id="characters" class="section">
    <div class="title">
          <h2>Characters</h2>
        </div>
    <div class="container px-0">
      <div class="d-flex flex-column flex-md-row align-items-start justify-content-between gap-3 mb-4">
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="frame h-100 shadow-sm">
            <div class="frame-header"></div>
            <div class="frame-body d-flex flex-column">
              <img src="/src/assets/CharacterImages/mrover.png" alt="Rover" class="character-image">
              <h5 class="frame-title">Rover</h5>
              <p class="frame-text flex-grow-1">The male version of the main protagonist of Wuthering Waves.</p>
              <a href="#" class="btn btn-outline-primary mt-3">More Info</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="frame h-100 shadow-sm">
            <div class="frame-header"></div>
            <div class="frame-body d-flex flex-column">
              <img src="/src/assets/CharacterImages/frover.png" alt="Rover" class="character-image">
              <h5 class="frame-title">Rover</h5>
              <p class="frame-text flex-grow-1">The female version of the main protagonist of Wuthering Waves.</p>
              <a href="#" class="btn btn-outline-primary mt-3">More Info</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="frame h-100 shadow-sm">
            <div class="frame-header"></div>
            <div class="frame-body d-flex flex-column">
              <img src="/src/assets/CharacterImages/Chisa.png" alt="Rover" class="character-image">
              <h5 class="frame-title">Chisa</h5>
              <p class="frame-text flex-grow-1">Chisa is a conscientious, level-headed student from the Startorch Academy.</p>
              <a href="#" class="btn btn-outline-primary mt-3">More Info</a>
            </div>
          </div>
        </div>
      </div>
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

.frame {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.frame-header {
  height: 0.85rem;
  background: linear-gradient(135deg, #007bff, #6610f2);
}

.frame-body {
  padding: 1.5rem;
}

.character-image {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}

.frame-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.frame-text {
  color: #555;
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

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
