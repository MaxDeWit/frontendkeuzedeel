<template>
  <nav class="navbar">
    <div class="logo">Wuthering Waves</div>

    <div class="navitems">
      <a class="active" href="#home">Home</a> 
      <a href="#characters">Characters</a>
      <a href="#regions">Regions</a>
      <a href="#about">About</a>
    </div>
  </nav>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
.navbar {
  background-color: #c5c3c3;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar .logo {
  font-weight: bold;
  font-size: 2.5rem;
  color: rgb(23, 23, 23);
  padding-left: 1rem;
  flex-shrink: 0;
}

.navbar .navitems {
  display: flex;
  gap: 1rem;
  padding-right: 3rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.navbar a {
  color: rgb(79, 77, 77);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  font-size: 1rem;
}

.navbar a::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: rgb(68, 67, 67);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.navbar a:hover::after {
  width: 70%;
}

/* .navbar a.active::after {
  width: 70%;
} */

.navbar a:hover {
  background-color: #555;
}

main {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem 0.5rem;
    gap: 1rem;
  }

  .navbar .logo {
    font-size: 2rem;
    padding-left: 0.5rem;
  }

  .navbar .navitems {
    padding-right: 0.5rem;
    justify-content: center;
    width: 100%;
  }

  .navbar a {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.75rem 0.5rem;
    gap: 0.5rem;
  }

  .navbar .logo {
    font-size: 1.5rem;
  }

  .navbar .navitems {
    gap: 0.5rem;
  }

  .navbar a {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
  }
}
</style>