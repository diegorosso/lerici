<template>
  <div class="submit-form">
    <div class="close-container">
      <button @click="handleModal" aria-label="Cerrar modal">
        <ion-icon class="icon-close" name="close-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
    <h1 class="third-text">Para concretar la compra necesitamos algunos datos:</h1>
    <form action="" @submit.prevent="confirmPurchase">
      <div class="flex-row">
        <div class="input-box">
          <input type="text" class="input" required v-model="formData.firstname" />
          <label for="">Nombre</label>
        </div>
        <div class="input-box">
          <input type="text" class="input" required v-model="formData.lastname" />
          <label for="">Apellido</label>
        </div>
      </div>
      <div class="flex-row">
        <div class="input-box">
          <input type="email" class="input" required v-model="formData.email" />
          <label for="">Email</label>
        </div>
        <div class="input-box">
          <input type="number" class="input" required v-model="formData.phone" />
          <label for="">Teléfono</label>
        </div>
      </div>
      <div class="input-box flex-row">
        <input type="checkbox" v-model="formData.cash" @click="handleBtns()" />
        <label for="">Pago en efectivo</label>
      </div>
      <div class="flex-row btns-wrapper">
        <button v-if="showBuyBtn" class="btn btn-contact" type="submit">
          <span v-if="!showSpinner"> Comprar </span>
          <span>
            <VueSpinner v-if="showSpinner" size="30" color="var(--color-eerie-black)" />
          </span>
        </button>
        <div :class="{ hidden: !showMpBtn }" id="wallet_container" ref="mpBtn"></div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueSpinner } from 'vue3-spinners'
import { useProductsStore } from '../stores/products.ts'
import axios from 'axios'

const store = useProductsStore()

const mp = new MercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, {
  locale: 'es-AR'
})

let mpBtn = ref(null)
let showMpBtn = ref(false)
let showBuyBtn = ref(true)
let showSpinner = ref(false)

const formData = ref({
  firstname: null,
  lastname: null,
  phone: null,
  email: '',
  cash: false
})

const emit = defineEmits(['closeModal'])
const handleModal = () => {
  emit('closeModal', false)
}

const confirmPurchase = () => {
  showSpinner.value = true
  if (formData.value.cash) {
    console.log('efectivo')
  } else {
    setMercadoPago()
  }
}

const setMercadoPago = async () => {
  const orderData = store.userCart.cart.map((product) => {
    return {
      name: product.Nombre,
      quantity: product.Cantidad,
      price: product.Precio
    }
  })

  try {
    const response = await axios.post(
      'https://lerici-backend.onrender.com/create_preference',
      //   'http://localhost:3000/create_preference',
      JSON.stringify(orderData),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    const preference = response.data
    createCheckoutButton(preference.id)
  } catch (error) {
    showSpinner.value = false
    console.log(error)
  }
}

const createCheckoutButton = (preferenceId) => {
  const bricksBuilder = mp.bricks()
  showBuyBtn.value = false
  showMpBtn.value = true

  const renderComponent = async () => {
    const hasChildren = mpBtn.value.childNodes.length > 0
    if (!hasChildren) {
      await bricksBuilder.create('wallet', 'wallet_container', {
        initialization: {
          preferenceId: preferenceId,
          redirectMode: 'blank'
        }
      })
    }
    // if (window.checkoutButton) window.checkoutButton.unmount()

    showSpinner.value = false
  }
  renderComponent()
}

const handleBtns = () => {
  const hasChildren = mpBtn.value.childNodes.length > 0

  if (!formData.value.cash) {
    showMpBtn.value = false
    showBuyBtn.value = true
  } else {
    showMpBtn.value = true
    if (hasChildren) showBuyBtn.value = false
  }
}
</script>

<style scoped>
.submit-form {
  position: relative;
  background-color: var(--color-blue);
  padding: 3em 3em 2em 3em;
}

.close-container {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  font-size: 24px;
}

.icon-close {
  color: #fff;
}

.third-text {
  font-family: 'Conceta';
  color: var(--color-light-blue);
}

form {
  padding: 1em 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.input-box {
  margin: 0.5em;
  height: 40px;
  width: 100%;
  position: relative;
}

.input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid var(--color-light-blue);
  padding-left: 10px;
  color: var(--color-light-blue);
  font-size: 16px;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 10px;
  padding-left: 10px;
  transform: translateY(-50%);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-light-blue);
  transition: 0.3s;
}

.input-box > input[type='checkbox'] {
  width: 1em;
  cursor: pointer;
}

.input-box .input:focus ~ label,
.input-box .input:valid ~ label {
  top: -1px;
  left: 10px;
  background: var(--color-blue);
  font-weight: 500;
  font-size: 12px;
  padding: 5px;
}

.btns-wrapper {
  width: 100%;
  padding-block: 2em;
}

.btn-contact {
  background: var(--color-light-blue);
  outline: none;
  font-weight: bold;
  padding: 10px 25px;
  cursor: pointer;
  width: 100%;
  height: fit-content;
}

.btn-contact:hover {
  color: var(--color-eerie-black);
}
</style>
