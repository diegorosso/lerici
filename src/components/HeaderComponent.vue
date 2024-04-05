<template>
  <header class="header" :class="{ active: isHeaderActive }" data-header>
    <div class="container">
      <a href="/" class="logo">
        <img :src="logoSource" width="132" height="27" alt="shoppie home" />
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
            <router-link to="tienda" class="navbar-link">Tienda</router-link>
          </li>
        </ul>
        <button class="card-btn" @click="openModal">
          <ion-icon class="bag-width" name="bag-outline" aria-hidden="true"></ion-icon>
        </button>
        <a href="btn" class="btn font-weight">Contacto</a>
      </nav>
      <button class="nav-open-btn" aria-label="toggle menu" @click="toggleNavbar">
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>
    </div>
    <!-- Modal -->
    <div class="modal" v-if="isModalOpen">
      <div class="modal-overlay" @click="closeModal"></div>
      <div class="modal-content right-aligned full-height">
        <div>
          <button @click="closeModal" aria-label="Cerrar modal">
            <ion-icon class="close-style" name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
        <div class="modal-header">
          <h2>Carrito</h2>
        </div>
        <div class="modal-body">
          <div class="product-item" v-for="(product, index) in cartProducts" :key="index">
            <div>
              <img :src="product.image" alt="Product" />
            </div>
            <div class="product-details">
              <div>
                <h3>{{ product.name }}</h3>
              </div>
              <div style="display: flex">
                <div class="counter-style">
                  <button>+</button><span><span>1</span></span
                  ><button>-</button>
                </div>
                <div>
                  <p>{{ product.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn-cancel" @click="closeModal">Seguir Comprando</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '@/assets/images/logo.png'
import logoNegro from '@/assets/images/logo-negro.png'

export default {
  data() {
    return {
      isHeaderActive: false,
      isNavbarActive: false,
      isLogoBlack: false, // Nueva propiedad para controlar el cambio de imagen del logo
      isModalOpen: false,
      cartProducts: [{ name: 'Bluchers', price: '$11500', image: '/img/product-1-public.jpg' }]
    }
  },
  computed: {
    // Calcula dinámicamente la fuente de la imagen del logo basándote en la propiedad isLogoBlack
    logoSource() {
      return this.isLogoBlack ? logoNegro : logo
    }
  },
  methods: {
    toggleNavbar() {
      this.isNavbarActive = !this.isNavbarActive
    },
    handleScroll() {
      this.isHeaderActive = window.scrollY > 50
    },
    handleScrollLogo() {
      // Método para controlar el cambio de la imagen del logo
      this.isLogoBlack = window.scrollY > 50
    },
    // Método para abrir el modal
    openModal() {
      this.isModalOpen = true
    },

    // Método para cerrar el modal
    closeModal() {
      this.isModalOpen = false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleScrollLogo) // Escucha el evento de scroll para cambiar el logo
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleScrollLogo) // Elimina el event listener al desmontar el componente
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

.navbar-link {
  padding: 10px 20px;
  position: relative; /* Añadir posición relativa para que el subrayado sea relativo al enlace */
  color: var(--color-blue);
  text-decoration: none; /* Quitar el subrayado predeterminado del enlace */
}
.card-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 25px 20px;
  font-family: 'Helvetica Neue', sans-serif;
  /* color: var(--color-blue); */
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-content {
  background-color: #fff;
  padding: 0px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  margin: 0;
  font-size: 24px;
}

.modal-body {
  text-align: center;
}

.modal-body img {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.modal-body p {
  margin-bottom: 20px;
}

.modal-body button {
  padding: 10px 20px;
  background-color: var(--color-blue);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.modal-body button:hover {
  background-color: var(--color-dark-blue);
}

.product-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  border-top: 1px solid #ccc;
  padding: 20px; /* Ajusta el espacio entre productos si es necesario */
}

.product-item img {
  max-width: 80px;
  border-radius: 4px;
}

.product-details h3 {
  margin: 0;
  font-size: 18px;
}

.product-details p {
  margin: 0;
  font-size: 14px;
}

.modal-footer {
  margin-top: 20px;
}

.btn-cancel,
.btn-checkout {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-cancel {
  background-color: #ccc;
  color: #333;
}

.btn-checkout {
  background-color: var(--color-blue);
  color: #fff;
}

.btn-cancel:hover,
.btn-checkout:hover {
  filter: brightness(90%);
}

.bag-width {
  font-size: 2rem;
}

.modal-content.right-aligned {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%; /* Puedes ajustar este valor según tus necesidades */
  background-color: #fff;
  z-index: 1000;
  overflow-y: auto; /* Añade scroll si el contenido es más alto que el modal */
}

.modal-content.full-height {
  height: 100%;
}

.counter-style {
  display: flex;
  align-items: center;
}
.close-style {
  font-size: 3rem;
  padding: 0 1rem 1rem 0;
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
