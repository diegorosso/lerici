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
          <li class="filters-item cursor-pointer">Mocasines</li>
          <li class="filters-item cursor-pointer">Botas</li>
          <li class="filters-item cursor-pointer">Borcegos</li>
          <li class="filters-item cursor-pointer">Zapatillas</li>
        </ul>
      </div>
    </div>
    <ul class="product-list has-scrollbar font-family">
      <li v-for="(product, index) in products" :key="index">
        <ProductComponent :product="product"></ProductComponent>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ProductComponent from '../components/ProductComponent.vue'
import products from '../stores/products.ts'
import { ref, onMounted } from 'vue'

// let isFiltersOpen = ref(false)

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

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
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-inline: 2em;
}

.product-card {
  width: 20vw;
}
</style>
