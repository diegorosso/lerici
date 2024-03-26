<template>
  <section class="offer has-bg-image" style="background-image: url('../assets/Imagenes/offer.jpg')">
    <div class="container">
      <div class="offer-card">
        <h2 class="title card-title">35% Off</h2>

        <p class="card-text">
          This is the main factor that sets us apart our competition and allows us deliver a
          specialist business consultancy service
        </p>

        <a href="#" class="btn btn-secondary">
          <span class="span">Shop Now</span>

          <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.offer {
  padding-block: 100px;
}

.offer-card {
  background-color: var(--bg-white);
  border: 2px solid var(--border-eerie-black);
  box-shadow: var(--shadow-2);
  padding: 80px 30px;
}

.offer-card .card-title {
  font-size: var(--fontSize-1);
}

.offer-card .card-text {
  font-size: var(--fontSize-8);
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
    padding-block: 200px;
  }

  .offer-card {
    width: 40%;
  }
}
</style>
