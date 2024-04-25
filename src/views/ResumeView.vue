<template>
  <div class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content right-aligned full-height">
      <main class="modal-body">
        <div class="product-width" v-if="store.userCart.cart.length >= 1">
          <div
            class="product-item"
            v-for="(product, index) in store.userCart.cart"
            v-bind:key="index"
          >
            <div class="container-image">
              <img :src="product.Imagen" alt="Product" style="width: 100%" />
            </div>
            <div class="product-details">
              <div class="product-style">
                <div>
                  <h3 class="name-style">{{ product.Nombre }}</h3>
                  <div class="size-style">
                    <span> Talle: {{ product.Talle }}</span>
                    <!-- <select v-model="product.Talles[0]">
                      <option v-for="(talle, index) in product.Talles" v-bind:key="index">
                        {{ talle }}
                      </option>
                    </select> -->
                  </div>
                  <div class="size-style">
                    <span> Cantidad: {{ product.Cantidad }}</span>
                  </div>
                </div>
              </div>
              <div class="counter-style">
                <button @click="store.incrementQuantity(product)">+</button>
                <button
                  @click="store.decrementQuantity(product)"
                  :class="{ disabled: product.Cantidad === 1 }"
                >
                  -
                </button>
                <button @click="store.deleteProduct(product)">
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
              <div class="price-style">
                <p>$ {{ product.Precio * product.Cantidad }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="empty-msg" v-if="store.userCart.cart.length < 1">
          <ion-icon name="cart-outline"></ion-icon>
          El carrito se encuentra vacío
        </div>
      </main>
      <footer class="modal-footer" v-if="store.userCart.cart.length >= 1">
        <p class="total-style">Total: ${{ store.totalPrice }}</p>
        <router-link to="/resumen" class="btn-cancel">Finalizar Comprar</router-link>
        <div id="wallet_container"></div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products.ts'

const store = useProductsStore()
</script>

<style scoped>
.modal {
  display: flex;
}

.modal-body {
  display: flex;
  flex-direction: row;
}

.product-item {
  display: flex;
  flex-direction: row;
  border: 1px solid;
  margin-top: 1rem;
}

.modal-content {
  display: flex;
  flex-direction: row;
  padding: 20rem 10rem 20rem 10rem;
}

.container-image {
  padding: 20px;
  width: 20%;
}

.product-details {
  padding: 20px;
}

.counter-style {
  display: flex;
}

.product-details {
  font-size: 18px;
  font-weight: bold;
}

.modal-body button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  gap: 10px;
  background-color: var(--color-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-footer {
  width: 100%;
  border: 1px solid;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 20vh;
  margin-top: 1rem;
}

.btn-cancel {
  background-color: var(--color-blue);
  color: var(--color-white);
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.total-style {
  font-size: 20px;
  font-weight: bold;
}

.product-width {
  width: 95%;
}
</style>
