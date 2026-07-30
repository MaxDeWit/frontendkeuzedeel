<template>
  <section id="about" class="section">
    <h2>About</h2>
  </section>

  <div class="about-wuwa" :style="Style">
    <div class="overlay">

      <div class="overlay-content">

        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>

        <slot name="about-overlay">

          <h3 class="title">
            About Wuthering Waves
          </h3>

          <img
            class="caption-image"
            :src="captionImage"
            alt="Decoration"
          />

          <p class="text">
            Wuthering Waves is a story-rich open-world action RPG with a high
            degree of freedom. You wake from your slumber as Rover, joined by a
            vibrant cast of Resonators on a journey to reclaim your lost
            memories and surmount the Lament.
          </p>
        </slot>

      </div>

    </div>
  </div>
</template>

<script>
import wuwabg from "../assets/wuwabg.png";
import koptext from "../assets/Koptext.png";

export default {
  name: "AboutSection",
  computed: {
    Style() {
      return {
        backgroundImage: `url(${wuwabg})`,
      };
    },
    captionImage() {
      return koptext;
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&display=swap');

.section{
    padding:3rem 2rem;
    border-bottom:none;
}

h2{
    font-size:2rem;
    color:#333;
    margin-bottom:1rem;
}

.about-wuwa{
    position:relative;
    width:100vw;
    left:50%;
    transform:translateX(-50%);
    min-height:65vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4rem 2rem;
    overflow:hidden;
}

.overlay{
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
}

.overlay-content{
    position:relative;
    width:100%;
    max-width:900px;
    padding:70px 60px;
    text-align:center;
    color:white;
    background:
    linear-gradient(
        180deg,
        rgba(255,255,255,.03),
        rgba(0,0,0,.42)
    ),
    rgba(18,18,18,.45);
    backdrop-filter:blur(12px);
    border:1px solid rgba(255,255,255,.18);
    border-radius:8px;
    overflow:hidden;
    box-shadow:
    0 0 40px rgba(0,0,0,.35),
    inset 0 0 0 1px rgba(255,255,255,.05);
}

.title{
    font-family:"Cinzel", serif;
    font-size:3.2rem;
    font-weight:500;
    letter-spacing:.5px;
    margin-bottom:18px;
    color:white;
}

.caption-image{
    display:block;
    width:150px;
    margin:0 auto 30px auto;
    opacity:.9;
}

.text{
    max-width:720px;
    margin:auto;
    line-height:1.9;
    font-size:1.15rem;
    color:rgba(255,255,255,.92);
}

.corner{
    position:absolute;
    width:32px;
    height:32px;
    pointer-events:none;
}

.corner::before,
.corner::after{
    content:"";
    position:absolute;
    background:rgba(255,255,255,.45);
    transition:.3s;
}

.corner::before{
    width:32px;
    height:1px;
}

.corner::after{
    width:1px;
    height:32px;
}

.top-left{
    top:18px;
    left:18px;
}

.top-right{
    top:18px;
    right:18px;
    transform:rotate(90deg);
}

.bottom-right{
    bottom:18px;
    right:18px;
    transform:rotate(180deg);
}

.bottom-left{
    bottom:18px;
    left:18px;
    transform:rotate(270deg);
}

.overlay-content{
    transition:
        transform .35s ease,
        box-shadow .35s ease,
        border-color .35s ease;
}

.overlay-content:hover{
    transform:translateY(-4px);
    border-color:rgba(255,255,255,.35);
    box-shadow:
        0 25px 60px rgba(0,0,0,.45),
        inset 0 0 0 1px rgba(255,255,255,.08);
}

.overlay-content:hover .corner::before,
.overlay-content:hover .corner::after{

    background:rgba(255,255,255,.75);

}

.about-wuwa::before{
    content:"";
    position:absolute;
    inset:0;
    background:
    linear-gradient(
        rgba(0,0,0,.15),
        rgba(0,0,0,.35)
    );
    pointer-events:none;
}

@media(max-width:1024px){
    .overlay-content{
        padding:55px 40px;
    }
    .title{
        font-size:2.5rem;
    }
}

@media(max-width:768px){
    .about-wuwa{
        padding:2rem 1rem;
        min-height:55vh;
    }
    .overlay-content{
        padding:40px 25px;
    }
    .title{
        font-size:2rem;
    }
    .caption-image{
        width:120px;
    }
    .text{
        font-size:1rem;
        line-height:1.7;
    }
    .explore-btn{
        padding:12px 24px;
    }
}

@media(max-width:480px){
    .overlay-content{
        padding:30px 20px;
    }
    .title{
        font-size:1.6rem;
    }
    .caption-image{
        width:90px;
    }
    .text{
        font-size:.95rem;
    }
}
</style>