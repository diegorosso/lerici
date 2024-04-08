<template>
  <section class="offer has-bg-image" style="background-image: url('../assets/images/offer.jpg')">
    <div class="logos-container">
      <div class="half-logo"></div>
      <div class="half-logo"></div>
    </div>

    <div class="container">
      <div class="offer-card">
        <h2 class="title card-title">35% Off</h2>

        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla veniam iure
          aperiam suscipit at fuga nisi obcaecati commodi distinctio.
        </p>

        <a href="#" class="btn btn-secondary">
          <span class="span font-weight">Comprar ahora</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
      </div>
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
  background: url(../assets/images/Lerici-medio-logo-verde-abajo.png) top / contain no-repeat;
}

.offer {
  padding-bottom: 100px;
}

.offer-card {
  background-color: var(--color-white);
  border: 2px solid var(--color-eerie-black);
  box-shadow: var(--shadow-2);
  padding: 80px 30px;
}

.offer-card .card-title {
  font-size: var(--fs-1);
}

.offer-card .card-text {
  font-size: var(--fs-8);
  line-height: 1.8;
  margin-block: 20px 45px;
}

@media (min-width: 576) {
  .offer-card {
    padding-inline: 50px;
  }
}

@media (min-width: 768px) {
  .offer-card {
    padding-inline: 90px;
  }
}
@media (min-width: 1200px) {
  .offer {
    padding-bottom: 200px;
  }

  .offer-card {
    width: 40%;
  }
}
</style>
