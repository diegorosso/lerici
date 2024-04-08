<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img
              src="../assets/images/logo-blanco.png"
              width="132"
              height="27"
              loading="lazy"
              alt="shoppie home"
            />
          </a>

          <p class="footer-text color-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque suscipit maiores nisi
            possimus neque! Nisi!
          </p>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <ul class="footer-list">
          <li>
            <p class="footer-list-title title">Información de contacto</p>

            <address class="footer-text color-white">
              9 de Julio 3270, CABA <br />
              Buenos Aires, Argentina
            </address>
          </li>

          <li>
            <a href="mailto:info.shoppie@support.com" class="email color-white">info@lerici.com</a>
          </li>

          <li>
            <a href="tel:+00 123 456 789" class="call color-white">+54 911 27305048</a>
          </li>
        </ul>

        <div class="footer-list">
          <p class="footer-list-title title">Suscribite al newsletter</p>

          <input
            type="email"
            name="email_address"
            placeholder="Ingresa tu correo electrónico"
            required
            autocomplete="off"
            class="input-field"
          />

          <button class="btn btn-secondary font-weight">Suscribite</button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="wrapper">
          <div class="link-wrapper">
            <a href="#" class="footer-bottom-link">Nosotros</a>
            <a href="#" class="footer-bottom-link">Nuestro equipo</a>
            <router-link to="tienda" class="footer-bottom-link">Tienda</router-link>
            <a href="#" class="footer-bottom-link">Carrito</a>
            <a href="#" class="footer-bottom-link">Contacto</a>
          </div>

          <div class="link-wrapper">
            <a href="#" class="footer-bottom-link">Términos & Condiciones</a>

            <a href="#" class="footer-bottom-link">Políticas de Privacidad</a>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; 2024 Bug Development, All Rights Reserved</p>
          <button class="icon-chevron" @click="scrollToTop">
            <ion-icon name="chevron-up-outline"></ion-icon>
          </button>
        </div>
      </div>

      <!-- <img
        src="../assets/images/footer-shape-1.png"
        width="245"
        height="165"
        loading="lazy"
        alt="shape"
        class="shape shape-1"
      />

      <img
        src="../assets/images/footer-shape-2.png"
        width="138"
        height="316"
        loading="lazy"
        alt="shape"
        class="shape shape-2"
      />

      <img
        src="../assets/images/footer-shape-3.png"
        width="346"
        height="92"
        loading="lazy"
        alt="shape"
        class="shape shape-3"
      /> -->
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background-color: var(--color-green);
  padding-block-start: 160px;
}

.footer-top {
  display: grid;
  gap: 30px;
  font-size: var(--fs-8);
  line-height: 1.7;
  margin-block-end: 60px;
}

.footer .logo {
  margin-block-end: 35px;
}

.social-list {
  display: flex;
  gap: 10px;
  margin-block-start: 30px;
}

.social-link {
  background-color: var(--color-white);
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-circle);
  border: 2px solid var(--color-eerie-black);
  box-shadow: var(--shadow-3);
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus-visible) {
  box-shadow: none;
  transform: translateY(-2px);
  border-color: currentColor;
}

.footer-list-title {
  font-size: var(--fs-10);
  margin-block-end: 30px;
  color: var(--color-light);
  letter-spacing: 0.1rem;
}

address.footer-text {
  margin-block-end: 15px;
}

.input-field {
  background-color: var(--color-white);
  box-shadow: var(--shadow-2);
  padding: 15px 30px;
  border: 2px solid var(--color-eerie-black);
  margin-block-end: 25px;
  outline: none;
  transition: var(--transition-1);
}

.input-field:focus {
  box-shadow: none;
}

.footer .btn {
  font-size: 1.6rem;
  padding-inline: 40px;
}

.footer-bottom .wrapper {
  border-block-end: 2px solid var(--color-light);
  padding-block-end: 15px;
}

.link-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 30px;
  margin-block-end: 15px;
}

.footer-bottom-link {
  font-size: var(--fs-11);
  font-weight: var(--weight-semiBold);
  text-transform: uppercase;
  transition: var(--transition-1);
  color: var(--color-light);
  text-decoration: none;
  position: relative;
}

.footer-bottom-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0; /* Ancho inicial de la línea (0) */
  height: 2px; /* Altura de la línea */
  background-color: var(--color-light); /* Color de la línea */
  transition: width 0.3s ease; /* Transición para la animación de ancho */
}

.footer-bottom-link:hover::after {
  width: 100%; /* Ancho al pasar el mouse (100%) */
}

.copyright {
  padding-block: 30px;
  font-size: var(--fs-8);
  text-align: center;
  color: var(--color-light);
}

.footer .shape-1 {
  display: block;
  top: 0;
  right: 0;
}

.color-white {
  color: var(--color-light);
}

@media (min-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .footer .shape-2 {
    display: block;
    bottom: 100px;
    left: 0;
  }
}

@media (min-width: 1200px) {
  .footer-top {
    grid-template-columns: repeat(3, 1fr);
    margin-block-end: 160px;
  }

  .footer-bottom .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .footer .shape-2 {
    bottom: 160px;
  }

  .footer .shape-3 {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center; /* Alinear elementos verticalmente */
  }

  .icon-chevron {
    margin-left: 5px; /* Espacio entre el texto y el icono */
    color: var(--color-light); /* Color del icono */
    font-size: 3rem; /* Tamaño del icono */
    transform: scaleX(-1); /* Espejar horizontalmente */
  }
}

@media (min-width: 1400px) {
  .footer-bottom-link {
    font-size: 1.6rem;
  }
}
</style>
