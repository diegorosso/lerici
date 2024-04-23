<template>
  <HomeComponent></HomeComponent>
  <NewsComponent></NewsComponent>
  <AboutUsComponent></AboutUsComponent>
  <FeatureComponent></FeatureComponent>
  <OfferComponent></OfferComponent>
</template>

<script setup>
import HomeComponent from '../components/HomeComponent.vue'
import NewsComponent from '../components/NewsComponent.vue'
import AboutUsComponent from '../components/AboutUsComponent.vue'
import FeatureComponent from '../components/FeatureComponent.vue'
import OfferComponent from '../components/OfferComponent.vue'
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
</script>
