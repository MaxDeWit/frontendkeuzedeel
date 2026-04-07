<template>
  <div class="home">
    <section id="home" class="section">
      <h1>Welcome</h1>
      <p>Dit is de home pagina.</p>
    </section>

    <section id="characters" class="section">
      <h2>Characters</h2>
      <p>Dit is de character pagina.</p>
    </section>

    <section id="regions" class="section">
      <h2>Regions</h2>
      <p>Dit is de regions pagina.</p>
    </section>

    <section id="about" class="section">
      <h2>About</h2>
      <p>Dit is de about page.</p>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 0;
}

.section {
  padding: 3rem 2rem;
  border-bottom: 1px solid #eee;
}

.section:last-child {
  border-bottom: none;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

p {
  color: #666;
  font-size: 1.1rem;
}
</style>
