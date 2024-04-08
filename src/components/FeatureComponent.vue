<template>
  <section class="section feature" aria-label="feature-label">
    <div class="background">
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
      <div class="item">
        <div class="painted"></div>
      </div>
    </div>
    <div class="container">
      <h2 class="h2 section-title title text-center" id="feature-label">Productos destacados</h2>

      <ul class="feature-list">
        <li>
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/shoes-feature7.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Acne Baseball Cap"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">Acne Baseball Cap</a>
              </h3>

              <span class="price">$80.00</span>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/shoes-feature2.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Short Sleeve Shirt"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">Short Sleeve Shirt</a>
              </h3>

              <span class="price">$170.00</span>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/shoes-feature6.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Garcons Parfums"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">Garcons Parfums</a>
              </h3>

              <span class="price">$190.00</span>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/shoes-feature8.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Salomon Sneaker"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">Salomon Sneaker</a>
              </h3>

              <span class="price">$450.00</span>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/shoes-feature9.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Ribbed Beanie Hat"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">Ribbed Beanie Hat</a>
              </h3>

              <span class="price">$120.00</span>
            </div>
          </div>
        </li>

        <li>
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/shoes-feature10.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Acronym Khaki"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h3 title">
                <a href="#" class="card-title">Acronym Khaki</a>
              </h3>

              <span class="price">$220.00</span>
            </div>
          </div>
        </li>
      </ul>

      <a href="#" class="btn btn-secondary font-weight">Ver todos los productos</a>
    </div>
    <div class="logos-container">
      <div class="half-logo"></div>
      <div class="half-logo"></div>
    </div>
  </section>
</template>

<style scoped>
.logos-container {
  display: flex;
  justify-content: space-around;
  width: 100vw;
}

.half-logo{
  width: 250px;
  height: 250px;
  background: url(../assets/images/Lerici-medio-logo-verde-arriba.png) bottom / contain no-repeat;
}

.background {
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  background: transparent;
  padding-bottom: 4em;
  /* position: absolute; */
}
.item {
  width: calc(100vw / 8);
  height: 100%;
  padding-inline: calc(100vw / 8 / 4);
  overflow: hidden;
  position: relative;
}
.painted {
  width: calc(100vw / 16);
  height: calc(100vh - 250px);
  min-height: 350px;
  background-color: var(--color-red);
}

.section.feature {
  padding-block: 0;
}

.feature-list {
  display: grid;
  gap: 60px;
  margin-block-end: 60px;
}

.feature .btn {
  margin-inline: auto;
}

.product-btn {
  color: #ffff;
}

.img-cover {
  transition:
    transform 0.3s ease,
    filter 0.3s ease; /* Transición para el zoom y el cambio de blanco y negro */
}

.img-cover:hover {
  transform: scale(1.1); /* Zoom del 10% al pasar el cursor sobre la imagen */
  filter: grayscale(100%); /* Cambiar a blanco y negro al pasar el cursor sobre la imagen */
  cursor: pointer;
}

@media (min-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
  }
}

@media (min-width: 1200px) {
  .feature-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
