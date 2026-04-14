<template>
  <nav class="navbar">
    <a href="#home">Home</a>
    <a href="#characters">Characters</a>
    <a href="#regions">Regions</a>
    <a href="#about">About</a>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navbar a:hover {
  background-color: #555;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
