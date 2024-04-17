<template>
  <div style="width: 100vw">
    <HeaderComponent></HeaderComponent>
    <router-view></router-view>

    <FooterComponent></FooterComponent>
  </div>
</template>

<script setup>
import HeaderComponent from '../src/components/HeaderComponent.vue'
import FooterComponent from '../src/components/FooterComponent.vue'
</script>
