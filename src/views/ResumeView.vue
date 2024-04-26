<template>
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
  <div class="wrapper">
    <h2 class="title h2">Resumen de compra</h2>
    <div class="content right-aligned full-height">
      <main>
        <div class="product-width" v-if="store.userCart.cart.length >= 1">
          <div
            class="product-item"
            v-for="(product, index) in store.userCart.cart"
            v-bind:key="index"
          >
            <div class="flex-row">
              <div class="container-image">
                <img :src="product.Imagen" alt="Product" style="width: 100%" />
              </div>
              <div class="product-details">
                <div class="product-style">
                  <div>
                    <h3 class="section-title">{{ product.Nombre }}</h3>
                    <div class="size-style">
                      <span> Talle: {{ product.Talle }}</span>
                      <!-- <select v-model="product.Talles[0]">
                        <option v-for="(talle, index) in product.Talles" v-bind:key="index">
                          {{ talle }}
                        </option>
                      </select> -->
                    </div>
                    <div class="size-style">
                      <span>Precio unitario: ${{ product.Precio }}</span>
                    </div>
                    <div class="size-style">
                      <span> Cantidad: {{ product.Cantidad }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btns-wrapper">
              <div>
                <h3 class="highlighted">${{ product.Precio * product.Cantidad }}</h3>
              </div>
              <div class="action-btns">
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
            </div>
          </div>
        </div>

        <div class="empty-msg" v-if="store.userCart.cart.length < 1">
          Por el momento no has agregado ningún producto.
          <router-link to="/tienda" class="btn btn-secondary font-weight"
            >Ver todos los productos</router-link
          >
        </div>
      </main>
      <aside v-if="store.userCart.cart.length >= 1">
        <p class="total-style">Total: ${{ store.totalPrice }}</p>
        <button class="btn-submit" @click="openPurchase">Finalizar Comprar</button>
      </aside>
    </div>
    <div class="modal" v-if="showModal">
      <PurchaseForm @closeModal="closePurchase"></PurchaseForm>
    </div>
  </div>
</template>

<script setup>
import PurchaseForm from '../components/PurchaseForm.vue'
import { useProductsStore } from '../stores/products.ts'
import { ref } from 'vue'

const store = useProductsStore()
let showModal = ref(false)

const openPurchase = () => {
  showModal.value = true
  window.scrollTo({
    top: 0
  })
  document.body.style.overflow = 'hidden'
}

const closePurchase = () => {
  showModal.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.background {
  margin-top: 100px;
  width: 100vw;
  display: flex;
  background: transparent;
  padding-bottom: 1em;
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
  height: 30vh;
  background-color: var(--color-red);
}

.wrapper {
  padding-inline: calc(var(--padding-inline-section) + 0.3em);
}

.title {
  text-align: center;
}

.content > main {
  display: flex;
  flex-direction: row;
}

.product-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
  margin-top: 1rem;
  padding: 20px;
}

.content {
  display: flex;
  justify-content: center;
  padding-block: 3em 8em;
}

.container-image {
  margin-right: 2em;
  width: 20%;
  display: flex;
  align-items: center;
}

.btns-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
.action-btns {
  display: flex;
  justify-content: space-between;
  padding-top: 0.5em;
}

.action-btns > button {
  margin-inline: 0.2em;
}

.product-details {
  padding-top: 0.5em;
  font-size: 18px;
  font-weight: bold;
}

main button {
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

.content > aside {
  width: 100%;
  border: 1px solid;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  margin-top: 1rem;
}

.highlighted {
  color: var(--color-red);
  font-weight: 800;
  padding-block: 0.3em;
  padding-right: 0.3em;
}

.btn-submit {
  background-color: var(--color-blue);
  color: var(--color-white);
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin-top: 1em;
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

.empty-msg {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.empty-msg > .btn {
  margin-top: 1em;
}

.modal {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9;
  bottom: 0;
  left: 0;
  background-color: rgba(208, 228, 232, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
