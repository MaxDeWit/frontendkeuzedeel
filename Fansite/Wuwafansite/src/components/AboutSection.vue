<template>
  <section id="about" class="section">
    <h2>About</h2>
  </section>

  <div class="about-wuwa" :style="Style">
    <div class="overlay">
      <div class="overlay-content">
        <slot name="about-overlay">
          <h3 class="title">About Wuthering Waves</h3>
          <p class="text">...
          </p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import wuwabg from "../assets/wuwabg.png";

export default {
  name: "AboutSection",
  computed: {
    Style() {
      return {
        backgroundImage: `url(${wuwabg})`,
      };
    },
  },
};
</script>

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

.about-wuwa {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100vw;
  min-height: 60vh;
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
}

.about-wuwa .overlay {
  --overlay-color: rgba(0, 0, 0, 0.35); 
  width: 100%;
  background: transparent; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.overlay-content {
  color: #fff;
  text-align: center;
  max-width: 1000px;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(0,0,0,0.38);
  border-radius: 4px;
}

.title {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.text {
  font-size: 1.125rem;
  margin: 0;
  opacity: 0.95;
}

@media (max-width: 1024px) {
  .about-wuwa {
    height: 50vh;
    min-height: 260px;
  }

  .title {
    font-size: 1.6rem;
  }

  .text {
    font-size: 1rem;
  }
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

  .about-wuwa {
    height: 40vh;
    min-height: 220px;
  }

  .overlay-content {
    padding: 0.75rem 1rem;
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

  .about-wuwa {
    height: 30vh;
    min-height: 160px;
  }

  .title {
    font-size: 1.2rem;
  }

  .text {
    font-size: 0.95rem;
  }
}
</style>
