<template>
  <section id="home" class="section">
    <h1>Welcome</h1>
    <p>Dit is de home pagina.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, sed maiores nulla libero omnis sapiente molestias? Expedita, quisquam vero. Quae quasi ipsam illum quibusdam! Explicabo repellendus neque placeat maiores blanditiis animi, nobis nisi magnam consectetur voluptatum debitis quaerat incidunt illo minima molestias ex. Tempore maxime ex optio deserunt consequatur dolor.</p>
    <br />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis debitis iusto placeat fuga aspernatur reiciendis porro sed aliquam, culpa officiis libero doloribus quisquam qui at delectus harum necessitatibus possimus asperiores quis eos, commodi nulla inventore. Corporis assumenda maiores non quam iusto perspiciatis neque earum exercitationem eius libero, facilis vel voluptates.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, sed maiores nulla libero omnis sapiente molestias? Expedita, quisquam vero. Quae quasi ipsam illum quibusdam! Explicabo repellendus neque placeat maiores blanditiis animi, nobis nisi magnam consectetur voluptatum debitis quaerat incidunt illo minima molestias ex. Tempore maxime ex optio deserunt consequatur dolor.</p>
    <br />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis debitis iusto placeat fuga aspernatur reiciendis porro sed aliquam, culpa officiis libero doloribus quisquam qui at delectus harum necessitatibus possimus asperiores quis eos, commodi nulla inventore. Corporis assumenda maiores non quam iusto perspiciatis neque earum exercitationem eius libero, facilis vel voluptates.</p>
  </section>
</template>

<style scoped>
.section {
  padding: 3rem 2rem;
  border-bottom: 1px solid #eee;
  background-color: #cb0d0d;
  width: 100%;
  max-width: 100%;
  border-radius: 0 0 18px 18px;
  box-sizing: border-box;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

p {
  color: #ffffff;
  font-size: 1.1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 1rem;
    border-radius: 0 0 12px 12px;
  }

  h1 {
    font-size: 1.8rem;
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

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
  }
}
</style>
