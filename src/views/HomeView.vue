<template>
  <div v-if="showSpinner" class="spinner-container">
    <VueSpinner size="50" color="var(--color-eerie-black)" />
  </div>
  <div v-if="!showSpinner">
    <HomeComponent></HomeComponent>
    <NewsComponent v-if="store.products.length >= 1"></NewsComponent>
    <AboutUsComponent></AboutUsComponent>
    <FeatureComponent v-if="store.products.length >= 1"></FeatureComponent>
    <OfferComponent></OfferComponent>
  </div>
</template>

<script setup>
import HomeComponent from '../components/HomeComponent.vue'
import NewsComponent from '../components/NewsComponent.vue'
import AboutUsComponent from '../components/AboutUsComponent.vue'
import FeatureComponent from '../components/FeatureComponent.vue'
import OfferComponent from '../components/OfferComponent.vue'
import { onMounted, ref } from 'vue'
import { useProductsStore } from '../stores/products.ts'
import { VueSpinner } from 'vue3-spinners'

let showSpinner = ref(false)
const store = useProductsStore()

onMounted(async () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  if (store.products.length === 0) {
    showSpinner.value = true
    await store.setAllProducts()
    showSpinner.value = false
  }
})
</script>
