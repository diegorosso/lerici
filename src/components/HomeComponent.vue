<template>
  <div class="hero">
    <div class="container">
      <div class="hero-content">
        <p class="hero-subtitle title">$120.00</p>

        <h1 class="h1 hero-title title">
          Man summer <br />
          collection
        </h1>

        <p class="hero-text">
          This is the factor that sets us apart from competition and allows us deliver a specialist
          business service team applies its ranging experience determining
        </p>

        <a href="#" class="btn btn-primary">
          <span class="span">Shop Now</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
      </div>

      <div class="hero-banner">
        <figure class="img-holder" style="--width: 704; --height: 700">
          <img
            src="../assets/Imagenes/homebanner.jpg"
            width="704"
            height="700"
            alt="hero banner"
            class="img-cover"
          />
        </figure>

        <img
          src="./assets/images/hero-shape-1.png"
          width="255"
          height="249"
          alt="shape"
          class="shape shape-1"
        />
      </div>

      <img
        src="./assets/images/hero-shape-2.png"
        width="360"
        height="133"
        alt="shape"
        class="shape shape-2"
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-color: #d4e4e8;
  padding-block: 130px 75px;
}

.hero .container {
  display: grid;
  gap: 50px;
}

.hero-subtitle {
  font-size: var(--fontSize-4);
}

.hero-title {
  margin-block: 16px 30px;
}

.hero-text {
  font-size: var(--fontSize-8);
  line-height: 2.1;
  margin-block-end: 16px;
}

.hero-banner {
  max-width: max-content;
  margin-inline: auto;
}

@media (min-width: 768px) {
  .hero {
    padding-block: 200px 130px;
  }
  .hero-text {
    --fontSize-8: 2.2rem;
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
    top: -140px;
    left: -120px;
    z-index: -1;
  }

  .hero .shape-2 {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
