<template>
  <div class="product-card text-center">
    <div class="card-banner">
      <figure class="product-banner img-holder" style="--width: 448; --height: 470">
        <img
          :src="product.Imagenes.length >= 1 ? product.Imagenes[0] : '/img/products/no-image.jpg'"
          width="448"
          height="470"
          loading="lazy"
          :alt="product.Nombre"
          class="img-cover"
        />
      </figure>

      <div>
        <button class="btn product-btn" @click="toDetail()">
          <ion-icon name="bag" aria-hidden="true"></ion-icon>
          <span class="span">Agregar al carrito</span>
        </button>
      </div>
    </div>

    <div class="card-content">
      <h3 class="h4 title">
        <a href="#" class="card-title">{{ product.Nombre }}</a>
      </h3>

      <span class="price">${{ product.Precio }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  product: {
    Imagenes: [],
    Nombre: String,
    Precio: Number,
    Categoria: String,
    Articulo: String,
    Descripcion: String,
    Talles: []
  }
})
const toDetail = () => {
  router.push({
    path: `/producto/${props.product.Nombre}`
  })
}
</script>

<style scoped>
.product-card {
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
    filter 0.3s ease;
}

.product-banner:hover img {
  transform: scale(1.1);
}

.product-btn {
  background-color: var(--color-eerie-black);
  color: var(--color-light);
}

.color-class {
  color: var(--color-blue);
}
</style>
