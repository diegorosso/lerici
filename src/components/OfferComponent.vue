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
      <ContactFormComponent></ContactFormComponent>
    </div>
  </section>
</template>

<script setup>
import ContactFormComponent from '@/components/ContactFormComponent.vue'
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.logos-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
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
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.offer-card .card-title {
  font-size: var(--fs-1);
}

.offer-card .card-text {
  font-size: var(--fs-8);
  line-height: 1.8;
  margin-block: 20px 0;
}

@media (max-width: 575px) {
  /* Cambiado a max-width: 575px */
  .container {
    flex-direction: column !important;
  }
  .container-contact {
    /* Cambiado de .container-contact a .container */
    width: 100%;
  }
  .item-contact {
    /* Cambiado de .item-contact a .offer-card */
    width: 100% !important;
  }
}
@media (min-width: 768px) {
  .offer-card {
    padding: 80px 90px;
  }
}
@media (min-width: 1280px) {
  .offer {
    padding-bottom: 200px;
  }

  .offer-card {
    max-width: 500px;
  }
}
</style>
