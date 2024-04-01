<template>
  <section class="section product" aria-label="product">
    <div class="container">
      <h2 class="h2 section-title title text-center">Novedades</h2>

      <ul class="product-list has-scrollbar">
        <li class="scrollbar-item">
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/product-1.jpg"
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
              <h3 class="h4 title">
                <a href="#" class="card-title">Short Sleeve Shirt</a>
              </h3>

              <span class="price">$170.00</span>
            </div>
          </div>
        </li>

        <li class="scrollbar-item">
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/product-2.jpg"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Dead Sunglasses"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h4 title">
                <a href="#" class="card-title">Dead Sunglasses</a>
              </h3>

              <span class="price">$210.00</span>
            </div>
          </div>
        </li>

        <!-- <li class="scrollbar-item">
          <div class="product-card text-center">
            <div class="card-banner">
              <figure class="product-banner img-holder" style="--width: 448; --height: 470">
                <img
                  src="../assets/images/product-3.png"
                  width="448"
                  height="470"
                  loading="lazy"
                  alt="Studios Trouser"
                  class="img-cover"
                />
              </figure>

              <a href="#" class="btn product-btn">
                <ion-icon name="bag" aria-hidden="true"></ion-icon>

                <span class="span">Agregar al carrito</span>
              </a>
            </div>

            <div class="card-content">
              <h3 class="h4 title">
                <a href="#" class="card-title">Studios Trouser</a>
              </h3>

              <span class="price">$90.00</span>
            </div>
          </div>
        </li> -->
      </ul>
    </div>
  </section>
</template>

<style scoped>
.product-list{
  display: flex;
  justify-content: space-around;
}

</style>