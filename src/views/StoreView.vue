<template>
  <div v-if="showSpinner" class="spinner-container">
    <VueSpinner size="50" color="var(--color-eerie-black)" />
  </div>
  <div v-if="!showSpinner" class="container flex-row">
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
            @click="setCategorie(categorie.name)"
          >
            {{ categorie.name }}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <ul class="product-list has-scrollbar">
        <li v-for="(product, index) in paginatedProducts" v-bind:key="index">
          <ProductComponent :product="product"></ProductComponent>
        </li>
      </ul>

      <div class="pagination-container">
        <pagination
          :options="{ template: MyPagination }"
          v-model="currentPage"
          :records="filteredProducts.length"
          :per-page="12"
          @paginate="setPage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductComponent from '../components/ProductComponent.vue'
import { useProductsStore } from '../stores/products.ts'
import { ref, onMounted } from 'vue'
import Pagination from 'v-pagination-3'
import MyPagination from '../components/MyPagination.vue'
import { VueSpinner } from 'vue3-spinners'

let showSpinner = ref(false)

const store = useProductsStore()

let productsList = ref([])
let filteredProducts = ref([])
let categories = ref([])

// FILTER
let filters = ref({
  categorie: null
})

const setCategorie = (value) => {
  filters.value.categorie = value
  setFilters()
}

// PAGINATION:
let paginatedProducts = ref([])
let currentPage = ref(1)
let itemsPerPage = 12

const setPage = (page) => {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex =
    startIndex + itemsPerPage > filteredProducts.value.length
      ? filteredProducts.value.length
      : startIndex + itemsPerPage
  paginatedProducts.value = filteredProducts.value.slice(startIndex, endIndex)

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(async () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  if (store.products.length === 0) {
    showSpinner.value = true;
    await store.setAllProducts()
    showSpinner.value = false;  
  }

  productsList.value = store.products

  categories.value = getCategories(productsList.value)
  filteredProducts.value = JSON.parse(JSON.stringify(productsList.value))
  setPage(1)
})

const setFilters = () => {
  filteredProducts.value = productsList.value.filter((i) => {
    if (filters.value.categorie) {
      return filters.value.categorie.toLowerCase() === i.Categoria.toLowerCase()
    }
  })

  setPage(1)
  currentPage.value = 1
}

const getCategories = (data) => {
  let categories = []

  data.forEach((i) => {
    if (
      !categories.some((c) => c.name?.toUpperCase().trim() === i.Categoria?.toUpperCase().trim())
    ) {
      categories.push({
        name: i.Categoria.charAt(0).toUpperCase() + i.Categoria.slice(1)
      })
    }
  })

  return categories
}

// let isFiltersOpen = ref(false)
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
  padding-inline: 0.5em;
  color: var(--color-blue);
}
.filters-container {
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
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline: 2em;
}

.product-card {
  width: 20vw;
}

.pagination-container {
  padding-top: 6em;
}

@media screen and (max-width: 570px) {
  .filters-container {
    display: none;
  }
}
.flex-row {
  flex-direction: row;
}
.filters {
  padding-inline: 0.5em;
  padding-inline: 0.5em;
  color: var(--color-blue);
}
</style>
