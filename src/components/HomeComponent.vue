<template>
  <!--   <div class="background">
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
    <div class="item">
      <div class="painted"></div>
    </div>
  </div> -->
  <section class="hero section">
    <div class="container">
      <div class="hero-content">
        <!-- <p class="hero-subtitle title">$120.00</p> -->

        <h1 class="h1 hero-title title">Donde la calidad se une al estilo</h1>

        <p class="hero-text">
          Desde chatitas hasta texanas, nuestra amplia seleccion de calzado ofrece lo mejor en
          comodidad y moda para la ocasion.
        </p>

        <a href="#" class="btn btn-primary">
          <span class="span font-weight">Ir a comprar</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
      </div>

      <div class="hero-banner">
        <figure class="img-holder" style="--width: 448; --height: 470">
          <img
            src="../assets/images/fashion.jpg"
            width="448"
            height="470"
            alt="hero banner"
            class="img-cover"
          />
        </figure>

        <!-- <img
          src="../assets/images/hero-shape-1.png"
          width="200"
          height="200"
          alt="shape"
          class="shape shape-2"
        /> -->
      </div>

      <!-- <img
        src="../assets/images/hero-shape-2.png"
        width="360"
        height="133"
        alt="shape"
        class="shape shape-2"
      /> -->
    </div>
    <div class="logos-container">
      <div class="half-logo"></div>
      <div class="half-logo"></div>
    </div>
  </section>
</template>

<style scoped>
.logos-container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}

.half-logo{
  width: 250px;
  height: 250px;
  background: url(../assets/images/Lerici-medio-logo-rojo-arriba.png) bottom / contain no-repeat;
}

/* .half-logo:nth-child(2){
  width: 250px;
  height: 250px;
  background: url(../assets/images/Lerici-medio-logo-verde-arriba.png) bottom / contain no-repeat;
} */

.container {
  padding-top: 5rem;
}
.background {
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  background: transparent;
  padding-top: 250px;
  /* position: absolute; */
}
.item {
  width: calc(100vw / 8);
  height: 100%;
  padding-inline: calc(100vw / 8 / 4);
}
.painted {
  width: calc(100vw / 16);
  height: calc(100vh - 250px);
  min-height: 350px;
  background-color: var(--color-green);
}
.hero {
  background-color: var(--bg-light-blue);
  padding-bottom: 0;
}

.hero .container {
  display: grid;
  gap: 50px;
}

.hero-subtitle {
  font-size: var(--fs-4);
}

.hero-title {
  margin-block: 16px 30px;
}

.hero-text {
  font-size: var(--fs-8);
  line-height: 2.1;
  margin-block-end: 16px;
}

.hero-banner {
  max-width: max-content;
  margin-inline: auto;
}

@media (min-width: 768px) {
  .hero-text {
    --fs-8: 2.2rem;
    line-height: 1.8;
  }
  .hero .btn {
    margin-block-start: 50px;
  }
}

@media (min-width: 1200px) {
  .hero {
    position: relative;
  }

  .hero .container {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .hero-banner {
    position: relative;
    z-index: 1;
  }

  .hero .shape-1 {
    position: absolute;
    top: -140px;
    left: -120px;
    z-index: -1;
  }

  .hero .shape-2 {
    /* position: static; */
    bottom: -220px;
    left: -52vw;
    transform: rotate(35deg);
    z-index: -1;
    position: absolute;
    /* left: 50%; */
  }
}
</style>
