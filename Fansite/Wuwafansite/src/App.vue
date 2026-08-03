<template>
  <nav class="navbar">
    <div class="logo">Wuthering Waves</div>

    <div class="navitems">
      <a class="active" href="#home">Home</a> 
      <a href="#characters">Characters</a>
      <a href="#regions">Regions</a>
      <a href="#about">About</a>
    </div>

    <button class="menu-toggle" @click="showMenu = !showMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div v-if="showMenu" class="mobile-menu">
      <a href="#home" @click="showMenu = false">Home</a>
      <a href="#characters" @click="showMenu = false">Characters</a>
      <a href="#regions" @click="showMenu = false">Regions</a>
      <a href="#about" @click="showMenu = false">About</a>
    </div>
  </nav>

  <main>
    <router-view />
  </main>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Footer from './components/Footer.vue'

const showMenu = ref(false)
</script>

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

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  gap: 0.4rem;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: rgb(23, 23, 23);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    padding: 1rem 0.5rem;
    gap: 1rem;
    position: relative;
  }

  .navbar .logo {
    font-size: 2rem;
    padding-left: 0.5rem;
    flex: 1;
  }

  .navitems {
    display: none !important;
  }

  .menu-toggle {
    display: flex;
    order: 3;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #b5b3b3;
    padding: 0.5rem;
    gap: 0;
    border-top: 1px solid #999;
  }

  .mobile-menu a {
    color: rgb(79, 77, 77);
    text-decoration: none;
    padding: 1rem;
    font-size: 1.1rem;
    border-bottom: 1px solid #999;
    transition: background-color 0.2s;
  }

  .mobile-menu a:last-child {
    border-bottom: none;
  }

  .mobile-menu a:hover {
    background-color: #a5a3a3;
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

  .mobile-menu a {
    padding: 0.8rem;
    font-size: 1rem;
  }
}
</style>