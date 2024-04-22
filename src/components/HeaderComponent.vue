<template>
  <header class="header" :class="{ active: isHeaderActive }" data-header>
    <div class="container">
      <router-link to="/" class="logo">
        <img :src="logoSource" width="132" height="27" alt="shoppie home" />
      </router-link>
      <nav class="navbar" :class="{ active: isNavbarActive }">
        <ul class="navbar-list">
          <li>
            <a href="#nosotros" class="navbar-link">Nuestro equipo</a>
          </li>
          <li>
            <router-link to="tienda" class="navbar-link">Tienda</router-link>
          </li>
        </ul>
        <button class="card-btn" @click="openModal">
          <ion-icon class="bag-width" name="bag-outline" aria-hidden="true"></ion-icon>
          <span>{{ store.totalProducts }}</span>
        </button>
        <a href="#contacto" class="btn font-weight">Contacto</a>
      </nav>
      <button class="nav-open-btn" aria-label="toggle menu" @click="toggleNavbar">
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
  </header>

  <CartComponent
    :isModalOpen="isModalOpen"
    v-if="isModalOpen"
    @closeModal="handleCloseModal"
  ></CartComponent>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
// import logoNegro from '@/assets/images/logo-negro.png'
import CartComponent from '../components/CartComponent.vue'
import { useProductsStore } from '../stores/products.ts'
import { ref, onMounted, onUnmounted } from 'vue'

const store = useProductsStore()

const isHeaderActive = ref(false)
const isNavbarActive = ref(false)
const isLogoBlack = ref(false)
const isModalOpen = ref(false)

const logoSource = ref(logo)

const toggleNavbar = () => {
  isNavbarActive.value = !isNavbarActive.value
}

const handleScroll = () => {
  isHeaderActive.value = window.scrollY > 50
}

const handleScrollLogo = () => {
  isLogoBlack.value = window.scrollY > 50
}

const openModal = () => {
  isModalOpen.value = true
}

const handleCloseModal = () => {
  isModalOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', handleScrollLogo)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleScrollLogo)
})
</script>

<style scoped>
.navbar .btn {
  display: none;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: var(--padding-block-3);
  z-index: 4;
  color: var(--color-blue);
}

.header.active {
  background-color: var(--color-white);
  box-shadow: var(--shadow-1);
  color: var(--color-eerie-black);
  opacity: 0.8;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-open-btn {
  font-size: 3.5rem;
}

.navbar {
  position: absolute;
  top: 85px;
  left: 0;
  right: 0;
  background-color: var(--color-white);
  max-height: 0;
  overflow: hidden;
  /* visibility: height; */
  transition: var(--transition-2);
}

.navbar.active {
  max-height: 310px;
  visibility: visible;
}

.navbar-list {
  padding-block-start: 15px;
  font-family: 'Helvetica Neue', sans-serif;
}

.navbar-list > li {
  padding: 10px 20px;
}

.navbar-link,
.card-btn .span {
  font-size: var(--fs-8);
}

.navbar-link {
  position: relative;
  color: var(--color-blue);
  text-decoration: none;
}
.card-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 25px 20px;
  font-family: 'Helvetica Neue', sans-serif;
  color: inherit;
}
.card-btn:hover {
  color: var(--color-red);
}

.navbar-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: var(--color-blue);
  transition: width 0.3s ease;
}

.navbar-link:hover::after {
  width: 100%;
}

.bag-width {
  font-size: 2rem;
}

@media (min-width: 992px) {
  .header {
    border-block-end: 1px solid var(--color-eerie-black);
  }

  .nav-open-btn {
    display: none;
  }

  .navbar,
  .navbar.active {
    all: unset;
    display: flex;
    align-items: center;
  }

  .navbar-list {
    padding-block-start: 0;
    display: flex;
  }

  .header.active .container,
  .header.active {
    border: none;
  }
}
@media (min-width: 992px) {
  .navbar .btn {
    display: block;
    padding: 10px 25px;
    margin-inline-start: 20px;
  }
}

@media (min-width: 1200px) {
  .navbar .btn {
    display: block;
    padding: 10px 25px;
    margin-inline-start: 20px;
  }
}
</style>
