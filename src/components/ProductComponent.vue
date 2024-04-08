<template>
  <div class="product-card text-center">
    <div class="card-banner">
      <figure class="product-banner img-holder" style="--width: 448; --height: 470">
        <img
          :src="product.image"
          width="448"
          height="470"
          loading="lazy"
          :alt="product.name"
          class="img-cover"
        />
      </figure>

      <a href="#" class="btn product-btn">
        <ion-icon name="bag" aria-hidden="true"></ion-icon>

        <span class="span">Agregar al carrito</span>
      </a>
    </div>

    <div class="card-content">
      <h3 class="h4 title">
        <a href="#" class="card-title">{{ product.name }}</a>
      </h3>

      <span class="price">${{ product.price }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    image: String,
    name: String,
    price: Number
  }
})
</script>

<style scoped>

.product-card{
  width: 28vw;
}
.product-banner {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.product-banner img {
  transition:
    transform 0.3s ease,
    filter 0.3s ease; /* Transición para el zoom y el cambio de blanco y negro */
}

.product-banner:hover img {
  transform: scale(1.1); /* Zoom del 10% al pasar el cursor sobre la imagen */
  filter: grayscale(100%); /* Cambiar a blanco y negro al pasar el cursor sobre la imagen */
}
</style>
