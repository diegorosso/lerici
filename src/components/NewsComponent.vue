<template>
  <div class="logos-container">
    <div class="half-logo"></div>
    <div class="half-logo"></div>
  </div>
  <section class="section product" aria-label="product">
    <div class="container">
      <h2 class="h2 section-title title text-center">Novedades</h2>

      <ul class="product-list has-scrollbar">
        <li class="scrollbar-item">
          <ProductComponent
            :product="{
              image: '/img/product-1-public.jpg',
              name: 'Short Sleeve Shirt',
              price: 150.0
            }"
          ></ProductComponent>
        </li>

        <li class="scrollbar-item">
          <ProductComponent
            :product="{ image: '/img/product-2.jpg', name: 'Dead Sunglasses', price: 210.0 }"
          ></ProductComponent>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import ProductComponent from './ProductComponent.vue'
</script>

<style scoped>
.logos-container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}
.half-logo {
  width: 250px;
  height: 200px;
  background: url(../assets/images/Lerici-medio-logo-rojo-abajo.png) top / contain no-repeat;
}

/* .half-logo:nth-child(2){
  width: 250px;
  height: 250px;
  background: url(../assets/images/Lerici-medio-logo-verde-abajo.png) top / contain no-repeat;
} */

.product-list {
  display: flex;
  justify-content: space-around;
}

/* .product-banner {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.product-banner img {
  transition:
    transform 0.3s ease,
    filter 0.3s ease; 
}

.product-banner:hover img {
  transform: scale(1.1);
  filter: grayscale(100%); 
} */
</style>
