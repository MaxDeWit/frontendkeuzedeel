<template>
  <section id="home" class="section">
    <h1>Welcome to Wuthering Waves</h1>
    <h2>Explore the world, characters and read the latest news</h2>
  </section>
</template>

<style scoped>
.section {
  padding: 3rem 2rem;
  border-bottom: 1px solid #eee;
  background-color: #403e3e;
  width: 100%;
  max-width: 100%;
  border-radius: 0 0 18px 18px;
  box-sizing: border-box;
  height: 300px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

h2 {
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
    border-radius: 0 0 12px 12px;
    height: 200px;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  h2 {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 1.5rem 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
