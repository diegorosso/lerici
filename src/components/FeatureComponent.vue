<template>
  <section class="section feature" aria-label="feature-label">
    <div class="background">
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
    </div>
    <div class="container">
      <h2 class="h2 section-title title text-center" id="feature-label">Productos destacados</h2>

      <ul class="feature-list">
        <li v-for="(product, index) in store.products.slice(0, 6)" v-bind:key="index">
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  :src="product.Imagen ? product.Imagen : '/src/assets/images/no-image.jpg'"
                  width="448"
                  height="470"
                  loading="lazy"
                  :alt="product.Nombre"
                  class="img-cover"
                />
              </figure>

              <button class="btn product-btn" @click="toDetail($router, product.Nombre)">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </button>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">{{ product.Nombre }}</a>
              </h3>
              <span class="price">${{ product.Precio }}</span>
            </div>
          </div>
        </li>
      </ul>

      <router-link to="/tienda" class="btn btn-secondary font-weight"
        >Ver todos los productos</router-link
      >
    </div>
    <div class="logos-container">
      <div class="half-logo"></div>
      <div class="half-logo"></div>
    </div>
  </section>
</template>

<script setup>
import { useProductsStore } from '../stores/products.ts'

const store = useProductsStore()

const toDetail = (router, productName) => {
  router.push({
    path: `/producto/${productName}`
  })
}
</script>

<style scoped>
.logos-container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}

.half-logo {
  width: 250px;
  height: 250px;
  background: url(../assets/images/Lerici-medio-logo-verde-arriba.png) bottom / contain no-repeat;
}

.background {
  width: 100vw;
  display: flex;
  background: transparent;
  padding-bottom: 4em;
}
.item {
  width: calc(100vw / 8);
  height: 100%;
  padding-inline: calc(100vw / 8 / 4);
  overflow: hidden;
  position: relative;
}
.painted {
  width: calc(100vw / 16);
  height: calc(100vh - 250px);
  min-height: 350px;
  background-color: var(--color-red);
}

.section.feature {
  padding-block: 0;
}

.feature-list {
  display: grid;
  gap: 60px;
  margin-block-end: 60px;
}

.feature .btn {
  margin-inline: auto;
}

.product-btn {
  color: #ffff;
}

.img-cover {
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.img-cover:hover {
  transform: scale(1.1);
  cursor: pointer;
}

@media (min-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
  }
}

@media (min-width: 1200px) {
  .feature-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
