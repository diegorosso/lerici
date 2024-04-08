<template>
  <header class="header" :class="{ active: isHeaderActive }" data-header>
    <div class="container">
      <router-link to="/" class="logo">
        <img :src="logoSource" width="132" height="27" alt="shoppie home" />
      </router-link>
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
        <div class="close-cotainer">
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
              <div class="product-style">
                <div>
                  <h3 class="name-style">{{ product.name }}</h3>
                  <div class="size-style">
                    <div>
                      <select v-model="product.size">
                        <option value="Talle" selected>Talle</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <ion-icon name="close-outline"></ion-icon>
                </div>
              </div>
              <div style="display: flex">
                <div class="counter-style">
                  <button @click="incrementQuantity(product)">+</button>
                  <span class="span-style">
                    <span>{{ product.quantity }}</span></span
                  >
                  <button @click="decrementQuantity(product)">-</button>
                </div>
                <div class="price-style">
                  <p>{{ calculateProductPrice(product) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <p class="total-style">Total: {{ formattedTotal }}</p>
          <button class="btn-cancel" @click="closeModal">Finalizar Compra</button>
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
      cartProducts: [
        {
          name: 'Bluchers',
          price: '$11500',
          image: '/img/product-1-public.jpg',
          quantity: 1,
          sinze: ''
        },
        {
          name: 'Loafers',
          price: '$15000',
          image: '/img/product-1-public.jpg',
          quantity: 1,
          sinze: ''
        }
      ]
    }
  },
  computed: {
    // Calcula dinámicamente la fuente de la imagen del logo basándote en la propiedad isLogoBlack
    logoSource() {
      return this.isLogoBlack ? logoNegro : logo
    },
    total() {
      return this.cartProducts.reduce((acc, product) => {
        const price = parseFloat(product.price.replace('$', ''))
        const totalPrice = price * product.quantity
        return acc + totalPrice
      }, 0)
    },
    formattedTotal() {
      const totalWithCommas = this.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      return `$${totalWithCommas}`
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
      // Establecer el valor predeterminado del select en "Talle" cuando se abre el modal
      this.cartProducts.forEach((product) => {
        product.size = 'Talle'
      })
    },

    // Método para cerrar el modal
    closeModal() {
      this.isModalOpen = false
    },
    incrementQuantity(product) {
      product.quantity++
    },
    decrementQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--
      }
    },
    calculateProductPrice(product) {
      // Elimina el signo de dólar y convierte la cadena de precio a número
      const price = parseFloat(product.price.replace('$', ''))
      const totalPrice = price * product.quantity
      const formattedPrice = totalPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      })
      return formattedPrice
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
  padding: 20px 0 0 20px;
}

.modal-header h2 {
  margin: 0;
  font-size: 24px;
}

.modal-body {
  text-align: center;
  height: 70vh;
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

.product-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  border-top: 1px solid #ccc;
  padding: 20px;
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
  font-size: 20px;
  font-weight: bold;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-cancel,
.btn-checkout {
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.btn-cancel {
  background-color: var(--color-blue);
  color: var(--color-white);
  width: 90%;
}

.btn-checkout {
  background-color: var(--color-blue);
  color: #fff;
}

.btn-cancel:hover,
.btn-checkout:hover {
  background-color: var(--color-white);
  color: var(--color-dark-blue);
  font-weight: bold;
  border-color: var(--color-blue);
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
  color: var(--color-blue);
}

.product-style {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
}

.name-style {
  font-weight: bold;
}

.close-cotainer {
  padding: 20px 0 0 20px;
}

.span-style {
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
}

.price-style {
  display: flex;
  align-items: center;
  padding: 0 0 0 1rem;
}

.total-style {
  font-size: 20px;
  font-weight: bold;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.size-style {
  display: flex;
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
