<template>
  <header class="header" :class="{ active: isHeaderActive }" data-header>
    <div class="container">
      <a href="/" class="logo">
        <img src="../assets/images/logo.png" width="132" height="27" alt="shoppie home" />
      </a>
      <nav class="navbar" :class="{ active: isNavbarActive }">
        <ul class="navbar-list">
          <li>
            <a href="#" class="navbar-link">Nosotros</a>
          </li>
          <li>
            <a href="#" class="navbar-link">Nuestro equipo</a>
          </li>
          <li>
            <a href="#" class="navbar-link">Tienda </a>
          </li>
        </ul>
        <button class="card-btn">
          <ion-icon name="bag" aria-hidden="true"></ion-icon>
          <span class="span">Carrito (02)</span>
        </button>
        <a href="btn" class="btn">Contacto</a>
      </nav>
      <button class="nav-open-btn" aria-label="toggle menu" @click="toggleNavbar">
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isHeaderActive: false,
      isNavbarActive: false
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive
    },
    handleScroll() {
      this.isHeaderActive = window.scrollY > 50
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
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

.navbar-link,
.card-btn .span {
  font-size: var(--fs-8);
  /* font-weight: var(--weight-semiBold); */
  text-transform: uppercase;
}

.navbar-link:hover,
.card-btn .span:hover{
  color: var(--color-red);
}

.navbar-link {
  padding: 10px 20px;
}
.card-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 25px 20px;
  font-family: "Helvetica Neue", sans-serif;
  /* color: var(--color-blue); */
  color: inherit;
}

.card-btn:hover{
  color: var(--color-red);
}

@media (min-width: 992px) {

  .header{
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

  .cart-btn {
    border-inline-start: 2px solid var(--color-eerie-black);
    padding-inline-start: 50px;
    margin-inline-start: 20px;
  }

  .header.active .container,
  .header.active .cart-btn {
    border: none;
  }
}
@media (min-width: 992px) {
  .cart-btn {
    padding-block: 35px;
  }

  .navbar .btn {
    display: block;
    padding: 10px 25px;
    text-transform: uppercase;
    margin-inline-start: 20px;
  }
}

@media (min-width: 1200px) {
  .cart-btn {
    padding-block: 35px;
  }

  .navbar .btn {
    display: block;
    padding: 10px 25px;
    text-transform: uppercase;
    margin-inline-start: 20px;
  }
}
</style>
