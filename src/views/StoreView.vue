<template>
  <div class="container flex-row">
    <div class="filters">
      <!-- <div @click="handleFilters" class="cursor-pointer">
        <ion-icon v-if="!isFiltersOpen" name="filter-outline"></ion-icon>
      </div> -->
      <div class="filters-container">
        <!-- <div class="filters-header">
          <h3>Filtros</h3>
          <div @click="handleFilters" class="cursor-pointer">
            <ion-icon name="close-outline" class="icon" @click="handleFilters"></ion-icon>
          </div>
        </div> -->
        <ul class="filters-contain">
          <li
            class="filters-item cursor-pointer"
            v-for="(categorie, index) in categories"
            v-bind:key="index"
          >
            {{ categorie.name }}
          </li>
        </ul>
      </div>
    </div>
    <ul class="product-list has-scrollbar">
      <li v-for="(product, index) in products" :key="index">
        <ProductComponent :product="product"></ProductComponent>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductComponent from '../components/ProductComponent.vue'
import { products, addProduct } from '../stores/products.ts'
import { ref, onMounted } from 'vue'
import axios from 'axios'

let productsList = ref([])
let categories = ref([])

// let isFiltersOpen = ref(false)

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  getProducts()
})

const getProducts = async () => {
  const sheetsApi = 'https://sheets.googleapis.com'
  const spreadsheetId = '1yrEnt0uxCPDSho7Fw3jjCmjmdauPSfxbh-UXmkOx618'
  const apiKey = import.meta.env.VITE_API_KEY;

  // GET GOOGLE SHEETS DATA:
  try {
    let sheetData = await axios({
      method: 'get',
      url: `${sheetsApi}/v4/spreadsheets/${spreadsheetId}`,
      params: {
        key: apiKey
      }
    })
    let endRange = sheetData.data.sheets[0].properties.gridProperties.rowCount
    let range = `A1:F${endRange}`

    let sheetValues = await axios({
      method: 'get',
      url: `${sheetsApi}/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      params: {
        key: apiKey
      }
    })
    let keys = []
    sheetValues.data.values.forEach((row, i) => {
      let obj = {}
      row.forEach((cell, index) => {
        if (i === 0) {
          keys.push(cell)
        }
        if (index === 0) obj[keys[0]] = cell
        if (index === 1) obj[keys[1]] = cell
        if (index === 2) {
          obj[keys[2]] = cell
        }
        if (index === 3) obj[keys[3]] = cell
        if (index === 4) obj[keys[4]] = cell
      })
      productsList.value.push(obj)
    })
    productsList.value.shift()
    categories.value = getCategories(productsList.value)
  } catch (error) {
    console.log(error)
  }
}

const getCategories = (data) => {
  let categories = []
  data.forEach((i) => {
    if (
      !categories.some(
        (b) =>
          b.name?.charAt(0).toUpperCase() + b.name?.slice(1) ===
          i.Categoria?.charAt(0).toUpperCase() + i.Categoria?.slice(1)
      )
    )
      categories.push({
        name: i.Categoria.charAt(0).toUpperCase() + i.Categoria.slice(1)
      })
  })

  return categories
}

// const handleFilters = () => {
//   isFiltersOpen.value = !isFiltersOpen.value
// }
</script>

<style scoped>
.container {
  padding-block: 150px;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-2);
}
.flex-row {
  flex-direction: row;
}
.filters {
  padding-inline: 0.5em;
  color: var(--color-blue);
}
.filters-container {
  /* font-family: 'Conceta', sans-serif; */
  font-family: 'Helvetica Neue', sans-serif;
  width: 18vw;
  min-width: 200px;
  height: 100%;
}
.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  /* font-style: italic; */
}
.filters-header > ion-icon {
  font-size: 22px;
}
ion-icon {
  font-size: 28px;
  color: var(--color-blue);
}
ion-icon:hover {
  color: var(--color-green);
}
.filters-contain {
  padding-block: 2em;
  font-size: 1.1em;
}
.filters-item {
  padding-top: 12px;
  position: relative;
  text-transform: uppercase;
  width: fit-content;
}
.filters-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}
.filters-item:hover::after {
  width: 100%;
}
/* .filters-item:hover {
  color: var(--color-red);
} */
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline: 2em;
}

.product-card {
  width: 20vw;
}
</style>
