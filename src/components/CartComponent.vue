<template>
  <div class="modal" v-on:keydown.esc="store.handleModal">
    <div class="modal-overlay" @click="store.handleModal"></div>
    <div class="modal-content right-aligned full-height">
      <header class="modal-header">
        <div>
          <h2>Carrito</h2>
        </div>
        <div class="close-container">
          <button @click="store.handleModal" aria-label="Cerrar modal">
            <ion-icon class="close-style" name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </header>
      <main class="modal-body">
        <div v-if="store.userCart.cart.length >= 1">
          <div
            class="product-item"
            v-for="(product, index) in store.userCart.cart"
            v-bind:key="index"
          >
            <div>
              <img :src="product.Imagen" alt="Product" width="120%" />
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
                  <div class="size-style">
                    <span>Precio unitario: ${{ product.Precio }}</span>
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
        <router-link to="/resumen" class="btn-cancel" @click="store.handleModal">Ver resumen</router-link>
      </footer>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useProductsStore } from '../stores/products.ts'

const mp = new MercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, {
  locale: 'es-AR'
})

const store = useProductsStore()
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    store.handleModal()
  }
})
// const props = defineProps({
//   isModalOpen: Boolean
// })

// const emit = defineEmits(['closeModal'])

// const closeModal = () => {
//   emit('closeModal', false)
// }
// const buy = async () => {
//   console.log('je')
//   const orderData = store.userCart.cart.map((product) => {
//     return {
//       name: product.Nombre,
//       quantity: product.Cantidad,
//       price: product.Precio
//     }
//   })

//   try {
//     const response = await axios.post(
//       'https://lerici-backend.onrender.com/create_preference',
//       // 'http://localhost:3000/create_preference',
//       JSON.stringify(orderData),
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     )
//     const preference = response.data
//     createCheckoutButton(preference.id)
//   } catch (error) {
//     console.log(error)
//   }
// }

// const createCheckoutButton = (preferenceId) => {
//   const bricksBuilder = mp.bricks()

//   const renderComponent = async () => {
//     if (window.checkoutButton) window.checkoutButton.unmount()

//     await bricksBuilder.create('wallet', 'wallet_container', {
//       initialization: {
//         preferenceId: preferenceId
//       },
//       customization: {
//         texts: {
//           valueProp: 'TEST DEVELOPMENT BUG'
//         }
//       }
//     })
//   }
//   renderComponent()
// }
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  background-color: #fff;
  padding: 0px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.modal-header {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  padding: 20px 0 0 20px;
}

.modal-header h2 {
  margin: 0;
  font-size: 24px;
}

.close-container {
  position: absolute;
  right: 0;
  top: 0;
  padding: 20px 0 0 20px;
}

.modal-body {
  overflow-y: auto;
  height: 70vh;
  text-align: center;
}

.empty-msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-block: 2em;
  color: var(--color-blue);
}

.empty-msg > ion-icon {
  padding-top: 3em;
  padding-bottom: 0.5em;
  font-size: 3em;
}

.product-details {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.modal-body img {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.modal-body p {
  margin-bottom: 20px;
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
.product-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  border-top: 1px solid #ccc;
  padding: 20px;
}

.product-item img {
  max-width: 80px;
  border-radius: 4px;
}

.product-details h3 {
  margin: 0;
  font-size: 18px;
}

.product-details p {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.modal-footer {
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 1em;
  width: 100%;
}

.btn-cancel,
.btn-checkout {
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;
  text-align: center;
}

.btn-cancel {
  background-color: var(--color-blue);
  color: var(--color-white);
  width: 90%;
}

.btn-checkout {
  background-color: var(--color-blue);
  color: #fff;
}

.btn-cancel:hover,
.btn-checkout:hover {
  background-color: var(--color-white);
  color: var(--color-dark-blue);
  font-weight: bold;
  border-color: var(--color-blue);
}

.modal-content.right-aligned {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;

  background-color: #fff;
  z-index: 1000;
}

.modal-content.full-height {
  height: 100%;
}

.counter-style {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}

.close-style {
  font-size: 3rem;
  padding: 0 1rem 1rem 0;
  color: var(--color-blue);
}

.product-style {
  padding-bottom: 1rem;
}

.name-style {
  font-weight: bold;
  text-align: end;
}
.span-style {
  border-radius: 4px;
  border: none;
}

.price-style {
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
}

.total-style {
  font-size: 20px;
  font-weight: bold;
}

.size-style {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.size-style > select {
  padding: 0.1em 0.3em;
  font-size: 1em;
}
.size-style > span {
  padding-right: 0.3em;
}
</style>
