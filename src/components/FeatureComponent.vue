<template>
  <section class="section feature" aria-label="feature-label">
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

      <a href="#" class="btn btn-secondary">Ver todos los productos</a>
    </div>
  </section>
</template>

<style scoped>
.section.feature {
  /* padding-block-start: 0; */
}

.feature-list {
  display: grid;
  gap: 60px;
  margin-block-end: 60px;
}

.feature .btn {
  margin-inline: auto;
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
