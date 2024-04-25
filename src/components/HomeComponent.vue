<template>
  <section class="hero section">
    <div class="container">
      <div class="hero-content">
        <h1 class="h1 hero-title title">Donde la calidad se une al estilo</h1>

        <p class="hero-text">
          Somos fabricantes de zapatos desde hace más de 20 años. <br />
          La calidad de nuestros cueros, el diseño innovador de nuestros productos y la puntualidad
          en las entregas es lo que nos caracteriza.
        </p>

        <router-link class="btn btn-primary" to="/tienda">
          <span class="span font-weight">Ir a comprar</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </router-link>
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
      </div>
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

.half-logo {
  width: 250px;
  height: 250px;
  background: url(../assets/images/Lerici-medio-logo-rojo-arriba.png) bottom / contain no-repeat;
}

.container {
  padding-top: 5rem;
}
.background {
  width: 100vw;
  display: flex;
  background: transparent;
  padding-top: 250px;
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
    /* position: relative; */
  }

  .hero .container {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .hero-banner {
    /* position: relative; */
    z-index: 1;
  }
}
</style>
