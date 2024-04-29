<template>
  <div v-if="!loadedData" class="spinner-container">
    <VueSpinner size="50" color="var(--color-eerie-black)" />
  </div>
  <div class="main-wrap" v-if="loadedData">
    <div class="product-description">
      <div class="imagen-galery">
        <img :src="product.Imagen" id="productImg" alt="" />
        <!-- <div class="controls">
          <span
            v-for="(image, index) in images"
            v-bind:key="index"
            class="btn-option"
            :class="{ active: currentIndex === index }"
            @click="changeImage(index)"
          ></span>
        </div> -->
      </div>
      <div class="product-details">
        <div class="details">
          <h1>{{ productData.Nombre }}</h1>
          <h3>$ {{ productData.Precio }}</h3>
          <p>
            {{ productData.Descripcion }}
          </p>
        </div>
        <div class="size-description">
          <form action="" class="form">
            <div class="select-size">
              <div>
                <h3 class="size-options">Talle:</h3>
              </div>
              <div class="size-form">
                <label for="talle" v-for="(talle, index) in productData.Talles" v-bind:key="index">
                  <input
                    type="radio"
                    name="size"
                    id="talle"
                    :value="talle"
                    v-model="selectedSize"
                  />
                  <span class="size-number">{{ talle }}</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <!-- <div class="colors">
          <form action="" class="form">
            <div class="select-colors">
              <div>
                <h3>Color:</h3>
              </div>
              <div class="color-form">
                <label class="padding-color" for="red">
                  <input type="radio" name="red" id="red" />
                  <span class="color-dot" style="background-color: red"></span>
                </label>
                <label class="padding-color" for="green">
                  <input type="radio" name="green" id="green" />
                  <span class="color-dot" style="background-color: green"></span>
                </label>
                <label class="padding-color" for="blue">
                  <input type="radio" name="blue" id="blue" />
                  <span class="color-dot" style="background-color: blue"></span>
                </label>
                <label class="padding-color" for="yellow">
                  <input type="radio" name="yellow" id="yellow" />
                  <span class="color-dot" style="background-color: yellow"></span>
                </label>
              </div>
            </div>
          </form>
        </div> -->
        <div class="quantity">
          <div class="select-quantity">
            <h3>Cantidad:</h3>
          </div>
          <div class="margin-quantity">
            <input class="quentity-padding" type="number" name="queantity" v-model="quantity" />
          </div>
        </div>
        <div class="sub-btn">
          <button class="submit btn" @click="setProduct()">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useRouter } from 'vue-router'
import { VueSpinner } from 'vue3-spinners'

const router = useRouter()
const store = useProductsStore()

const productName = computed(() => router.params.id)

let loadedData = ref(false)
let productData = ref({})
let product = ref({})
let selectedSize = ref(null)
let quantity = ref(1)
// let showSuccesfulMsg = ref(false)

onMounted(async () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  if (store.products.length === 0) {
    await store.setAllProducts()
  }

  productData.value = store.products.find((p) => {
    return p.Nombre.toLowerCase() === productName.value.toLowerCase()
  })

  selectedSize.value = productData.value.Talles[0]

  product.value = {
    Nombre: productData.value.Nombre,
    Imagen: productData.value.Imagen,
    Categoria: productData.value.Categoria,
    Articulo: productData.value.Articulo,
    Descripcion: productData.value.Descripcion,
    Talle: productData.value.Talles[0],
    Precio: productData.value.Precio,
    Cantidad: 1
  }

  loadedData.value = true
})

const setProduct = () => {
  store.addProduct({ ...product.value, Talle: selectedSize.value, Cantidad: quantity.value })
  store.handleModal()
  router.push('/tienda')
}

const currentIndex = ref(0)

const currentImage = () => {
  return images[currentIndex.value]
}

const changeImage = (index) => {
  currentIndex.value = index
}
</script>

<style>
.pop-up {
  position: absolute;
  font-weight: 500;
  width: 280px;
  z-index: 9;
  top: calc(50vh - 20px);
  right: calc(50vw - 280px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 2em;
  background-color: var(--color-green);
  color: var(--color-light-blue);
  transition: all 500ms ease-in;
  visibility: hidden;
}

.main-wrap {
  width: 100%;
  padding-block: 200px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-wrap .product-description {
  width: 90%;
  max-width: 750px;
  display: flex;
}

.main-wrap .product-description .imagen-galery {
  flex-basis: 43%;
  background: #011627;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-wrap .product-description .imagen-galery img {
  width: 100%;
  /* padding-top: 150px; */
}

.main-wrap .product-description .imagen-galery .controls {
  position: absolute;
  bottom: 40px;
  right: 20px;
}

.main-wrap .product-description .imagen-galery .controls .btn-option {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
}

.main-wrap .product-description .imagen-galery .controls .btn-option.active {
  background: #00b4d8;
}

.main-wrap .product-description .product-details {
  flex-basis: 53%;
  background-color: #fff;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 40px 30px 40px 40px;
}

.main-wrap .product-description .product-details h2 {
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 10px;
  color: red;
}

.main-wrap .product-description .product-details h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 10px;
  color: red;
}

.main-wrap .product-description .product-details h4 {
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  text-transform: uppercase;
  color: red;
}

.size-description .form .select-size .size-options {
  display: flex;
  gap: 10px;
  align-items: center;
}

.size-description .form .select-size .size-options label {
  display: flex;
  align-items: center;
}

.size-description .form .select-size .size-options label input[type='radio'] {
  display: none;
}

.size-description .form .select-size .size-options label span {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.size-description .form .select-size .size-options label span:hover {
  background-color: #f0f0f0;
}

.size-description .form .select-size .size-options label input[type='radio']:checked + span {
  background-color: #00b4d8;
  color: #fff;
}

.size-description .form .select-size .size-options label input[type='radio'] {
  display: none;
}

.size-description .form .select-size .size-options label .size-number {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.size-description .form .select-size .size-options label .size-number:hover {
  background-color: #f0f0f0;
}

.size-description
  .form
  .select-size
  .size-options
  label
  input[type='radio']:checked
  + .size-number {
  background-color: #00b4d8;
  color: #fff;
}

.select-size {
  display: flex;
  padding-top: 3rem;
}

.colors .form .select-colors {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 2rem;
}

.colors .form .select-colors label {
  display: flex;
  align-items: center;
}

.colors .form .select-colors label input[type='radio'] {
  display: none;
}

.colors .form .select-colors label .color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.colors .form .select-colors label input[type='radio']:checked + .color-dot {
  border: 2px solid #00b4d8;
}

.size-number {
  padding: 5px;
}

.size-form {
  display: flex;
  padding: 0px 0 0 4rem;
}

.color-form {
  display: flex;
  margin-bottom: 10px;
  padding: 0 0 0 2rem;
}

.padding-color {
  padding: 5px;
}

.quantity {
  display: flex;
  align-items: center;
  padding-top: 2rem;
}

.margin-quantity {
  margin-bottom: 10px;
}

.quentity-padding {
  border-radius: 10px;
  width: 70%;
  padding: 0 1rem 0 1rem;
  border: 2px solid var(--color-blue);
  margin: 0 0 0 1rem;
}

.sub-btn {
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.btn {
  padding: 15px 25px;
}

@media (max-width: 576px) {
  .main-wrap .product-description {
    flex-direction: column;
  }
  .main-wrap .product-description .imagen-galery {
    transform: none;
    box-shadow: none;
  }
  .size-form {
    padding: 0 0 0 1rem;
  }
}
</style>
