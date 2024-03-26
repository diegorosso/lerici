<template>
  <header class="header" :class="{ active: isHeaderActive }" data-header>
    <div class="container">
      <a href="/" class="logo">
        <img src="../assets/Imagenes/logo.png" width="132" height="27" alt="shoppie home" />
      </a>
      <nav class="navbar" :class="{ active: isNavbarActive }">
        <ul class="navbar-list">
          <li>
            <a href="#" class="navbar-link">Home</a>
          </li>
          <li>
            <a href="#" class="navbar-link">Portfolio</a>
          </li>
          <li>
            <a href="#" class="navbar-link">Blog</a>
          </li>
          <li>
            <a href="#" class="navbar-link">Shop </a>
          </li>
        </ul>
        <button class="card-btn">
          <ion-icon name="bag" aria-hidden="true"></ion-icon>
          <span class="span">Cart (02)</span>
        </button>
        <a href="btn" class="btn">Contact Us</a>
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
  padding-block: 25px;
  z-index: 4;
}

.header.active {
  background-color: var(--bg-white);
  box-shadow: var(--shadow-1);
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
  background-color: var(--bg-white);
  max-height: 0;
  overflow: hidden;
  visibility: height;
  transition: var(--transition-2);
}

.navbar.active {
  max-height: 310px;
  visibility: visible;
}

.navbar-list {
  padding-block-start: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

.navbar-link,
.card-btn .span {
  font-weight: var(--weight-semiBold);
  text-transform: uppercase;
}

.navbar-link {
  padding: 10px 20px;
}
.card-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 25px 20px;
  font-family: Arial, Helvetica, sans-serif;
}

@media (min-width: 992px) {
  .header {
    padding-block: 0;
  }

  .header .container {
    border-block-end: 2px solid var(--border-eerie-black);
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
    border-inline-start: 2px solid var(--border-eerie-black);
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
