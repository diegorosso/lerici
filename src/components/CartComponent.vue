<template>
  <div class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content right-aligned full-height">
      <div class="close-cotainer">
        <button @click="closeModal" aria-label="Cerrar modal">
          <ion-icon class="close-style" name="close-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
      <div class="modal-header">
        <h2>Carrito</h2>
      </div>
      <div class="modal-body">
        <div class="product-item" v-for="(product, index) in store.userCart.cart" v-bind:key="index">
          <div>
            <img :src="product.image" alt="Product" />
          </div>
          <div class="product-details">
            <div class="product-style">
              <div>
                <h3 class="name-style">{{ product.Nombre }}</h3>
                <div class="size-style">
                  <div>
                    <select v-model="product.Talles">
                      <option value="Talle" selected>Talle</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
            <div style="display: flex">
              <div class="counter-style">
                <button @click="store.incrementQuantity(product)">+</button>
                <span class="span-style">
                  <span>{{ product.quantity }}</span></span
                >
                <button @click="store.decrementQuantity(product)">-</button>
              </div>
              <div class="price-style">
                <p>{{ product.Precio }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <p class="total-style">Total: ${{ store.userCart.totalPrice }}</p>
        <button class="btn-cancel" @click="closeModal">Finalizar Compra</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products.ts'

const store = useProductsStore()

const props = defineProps({
  isModalOpen: Boolean
})

const emit = defineEmits(['closeModal'])

const closeModal = () => {
  emit('closeModal', false)
}
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 0 0 20px;
}

.modal-header h2 {
  margin: 0;
  font-size: 24px;
}

.modal-body {
  text-align: center;
  height: 70vh;
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
  padding: 10px 20px;
  background-color: var(--color-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.product-item {
  display: flex;
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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-cancel,
.btn-checkout {
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;
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
  width: 30%; /* Puedes ajustar este valor según tus necesidades */
  background-color: #fff;
  z-index: 1000;
  overflow-y: auto; /* Añade scroll si el contenido es más alto que el modal */
}

.modal-content.full-height {
  height: 100%;
}

.counter-style {
  display: flex;
  align-items: center;
}

.close-style {
  font-size: 3rem;
  padding: 0 1rem 1rem 0;
  color: var(--color-blue);
}

.product-style {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.name-style {
  font-weight: bold;
}

.close-cotainer {
  padding: 20px 0 0 20px;
}

.span-style {
  padding: 10px 20px;
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
}
</style>
