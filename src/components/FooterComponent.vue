<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="#" class="logo">
            <img
              src="../assets/Imagenes/logo.png"
              width="132"
              height="27"
              loading="lazy"
              alt="shoppie home"
            />
          </a>

          <p class="footer-text">
            Main factor that sets us apart competition allows deliver a specialist business
            consultancy service applies its ranging experience
          </p>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>

        <ul class="footer-list">
          <li>
            <p class="footer-list-title title">Contact info</p>

            <address class="footer-text">
              Neal St, London WC2H 9PR <br />
              United Kingdom
            </address>
          </li>

          <li>
            <a href="mailto:info.shoppie@support.com" class="email">info.shoppie@support.com</a>
          </li>

          <li>
            <a href="tel:+00 123 456 789" class="call">+00 123 456 789</a>
          </li>
        </ul>

        <div class="footer-list">
          <p class="footer-list-title title">Subscribe newsletter</p>

          <input
            type="email"
            name="email_address"
            placeholder="Enter your email address"
            required
            autocomplete="off"
            class="input-field"
          />

          <button class="btn btn-secondary">Subscribe</button>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="wrapper">
          <div class="link-wrapper">
            <a href="#" class="footer-bottom-link">Portfolio</a>
            <a href="#" class="footer-bottom-link">Our Team</a>
            <a href="#" class="footer-bottom-link">Pricing Plan</a>
            <a href="#" class="footer-bottom-link">Services</a>
            <a href="#" class="footer-bottom-link">Contact Us</a>
          </div>

          <div class="link-wrapper">
            <a href="#" class="footer-bottom-link">Terms & Conditions</a>

            <a href="#" class="footer-bottom-link">Privacy Policy</a>
          </div>
        </div>

        <p class="copyright">&copy; 2024 Bug, All Rights Reserved</p>
      </div>

      <img
        src="../assets/Imagenes/footer-shape-1.png"
        width="245"
        height="165"
        loading="lazy"
        alt="shape"
        class="shape shape-1"
      />

      <img
        src="../assets/Imagenes/footer-shape-2.png"
        width="138"
        height="316"
        loading="lazy"
        alt="shape"
        class="shape shape-2"
      />

      <img
        src="../assets/Imagenes/footer-shape-3.png"
        width="346"
        height="92"
        loading="lazy"
        alt="shape"
        class="shape shape-3"
      />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background-color: var(--bg-gainsboro);
  padding-block-start: 160px;
}

.footer-top {
  display: grid;
  gap: 30px;
  font-size: var(--fontSize-8);
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
  background-color: var(--bg-white);
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: var(--radius-circle);
  border: 2px solid var(--border-eerie-black);
  box-shadow: var(--shadow-3);
  transition: var(--transition-1);
}

.social-link:is(:hover, :focus-visible) {
  box-shadow: none;
  color: var(--text-orange-crayola);
  transform: translateY(-2px);
  border-color: currentColor;
}

.footer-list-title {
  font-size: var(--fontSize-10);
  margin-block-end: 30px;
}

address.footer-text {
  margin-block-end: 15px;
}

.input-field {
  background-color: var(--bg-white);
  box-shadow: var(--shadow-2);
  padding: 15px 30px;
  border: 2px solid var(--border-eerie-black);
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
  border-block-end: 2px solid var(--border-eerie-black);
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
  font-size: var(--fontSize-11);
  font-weight: var(--weight-semiBold);
  text-transform: uppercase;
  transition: var(--transition-1);
}

.footer-bottom-link:is(:hover, :focus-visible) {
  color: var(--text-orange-crayola);
}

.copyright {
  padding-block: 30px;
  font-size: var(--fontSize-8);
  text-align: center;
}

.footer .shape-1 {
  display: block;
  top: 0;
  right: 0;
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
    text-align: left;
    padding-block-end: 50px;
  }
}

@media (min-width: 1400px) {
  .footer-bottom-link {
    font-size: 1.6rem;
  }
}
</style>
