<template>
  <section id="about" class="section">
    <h2>About</h2>
    <p>Dit is de about page.</p>
  </section>
</template>

<style scoped>
.section {
  padding: 3rem 2rem;
  border-bottom: none;
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
