<template>
  <HomeComponent></HomeComponent>
  <NewsComponent></NewsComponent>
  <FeatureComponent></FeatureComponent>
  <OfferComponent></OfferComponent>
  <ProductDescriptionComponent></ProductDescriptionComponent>
</template>

<script setup>
import HomeComponent from '../components/HomeComponent.vue'
import NewsComponent from '../components/NewsComponent.vue'
import FeatureComponent from '../components/FeatureComponent.vue'
import OfferComponent from '../components/OfferComponent.vue'
import ProductDescriptionComponent from '../components/ProductDescriptionComponent.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>
