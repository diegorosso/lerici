<template>
  <div class="main-wrap">
    <div class="product-description">
      <div class="imagen-galery">
        <img :src="currentImage" id="productImg" alt="" />
        <div class="controls">
          <span
            v-for="(image, index) in images"
            :key="index"
            class="btn-option"
            :class="{ active: currentIndex === index }"
            @click="changeImage(index)"
          ></span>
        </div>
      </div>
      <div class="product-details">
        <div class="details">
          <h1>LOREM, IMPSUM DOLOR.</h1>
          <h3>$150.000</h3>
          <h4>35% OFF</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, iure! Dolore
            in, molestias maxime veniam pariatur quod laudantium eaque laborum eos mollitia itaque
            ex delectus exercitationem! Vel ratione tempore numquam!
          </p>
        </div>
        <div class="size-description">
          <form action="" class="form">
            <div class="select-size">
              <h3 class="size-options">Size:</h3>
              <label for="size-34">
                <input type="radio" name="size" id="size-34" />
                <span class="size-number">34</span>
              </label>
              <label for="size-35">
                <input type="radio" name="size" id="size-35" />
                <span class="size-number">35</span>
              </label>
              <label for="size-36">
                <input type="radio" name="size" id="size-36" />
                <span class="size-number">36</span>
              </label>
              <label for="size-37">
                <input type="radio" name="size" id="size-37" />
                <span class="size-number">37</span>
              </label>
              <label for="size-38">
                <input type="radio" name="size" id="size-38" />
                <span class="size-number">38</span>
              </label>
            </div>
          </form>
        </div>
        <div class="colors">
          <form action="" class="form">
            <div class="select-colors">
              <h3>Color:</h3>
              <label for="red">
                <input type="radio" name="red" id="red" />
                <span class="color-dot" style="background-color: red"></span>
              </label>
              <label for="green">
                <input type="radio" name="green" id="green" />
                <span class="color-dot" style="background-color: green"></span>
              </label>
              <label for="blue">
                <input type="radio" name="blue" id="blue" />
                <span class="color-dot" style="background-color: blue"></span>
              </label>
              <label for="yellow">
                <input type="radio" name="yellow" id="yellow" />
                <span class="color-dot" style="background-color: yellow"></span>
              </label>
            </div>
          </form>
        </div>
        <div class="quantity">
          <div class="select-quantity">
            <h3>Queantity:</h3>
            <input type="number" name="queantity" value="1" />
          </div>
        </div>
        <div class="sub-btn">
          <button class="submit">Agregar al Carrito</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/dist/assets/product-1-BHgmbLKn.jpg',
        '/dist/assets/product-2-d-zGLzR3.jpg',
        '/dist/assets/shoes-feature2-DcuPd2bJ.jpg'
      ],
      currentIndex: 0
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    }
  },
  methods: {
    changeImage(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
.main-wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-wrap .product-description {
  width: 90%;
  max-width: 750px;
  display: flex;
}

.main-wrap .product-description .imagen-galery {
  flex-basis: 43%;
  background: #011627;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  transform: scale(1.07);
  position: relative;
}

.main-wrap .product-description .imagen-galery img {
  width: 100%;
  padding-top: 150px;
}

.main-wrap .product-description .imagen-galery .controls {
  position: absolute;
  bottom: 40px;
  right: 20px;
}

.main-wrap .product-description .imagen-galery .controls .btn-option {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  display: block;
  margin-bottom: 10px;
  cursor: pointer;
}

.main-wrap .product-description .imagen-galery .controls .btn-option.active {
  background: #00b4d8;
}

.main-wrap .product-description .product-details {
  flex-basis: 53%;
  background-color: #fff;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 40px 30px 40px 40px;
}

.main-wrap .product-description .product-details h2 {
  font-size: 25px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 10px;
  color: red;
}

.main-wrap .product-description .product-details h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 35px;
  margin-bottom: 10px;
  color: red;
}

.main-wrap .product-description .product-details h4 {
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  text-transform: uppercase;
  color: red;
}

.size-description .form .select-size .size-options {
  display: flex;
  gap: 10px;
  align-items: center;
}

.size-description .form .select-size .size-options label {
  display: flex;
  align-items: center;
}

.size-description .form .select-size .size-options label input[type='radio'] {
  display: none;
}

.size-description .form .select-size .size-options label span {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.size-description .form .select-size .size-options label span:hover {
  background-color: #f0f0f0;
}

.size-description .form .select-size .size-options label input[type='radio']:checked + span {
  background-color: #00b4d8;
  color: #fff;
}

.size-description .form .select-size .size-options label input[type='radio'] {
  display: none;
}

.size-description .form .select-size .size-options label .size-number {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.size-description .form .select-size .size-options label .size-number:hover {
  background-color: #f0f0f0;
}

.size-description
  .form
  .select-size
  .size-options
  label
  input[type='radio']:checked
  + .size-number {
  background-color: #00b4d8;
  color: #fff;
}

.select-size {
  display: flex;
}

.colors .form .select-colors {
  display: flex;
  gap: 10px;
  align-items: center;
}

.colors .form .select-colors label {
  display: flex;
  align-items: center;
}

.colors .form .select-colors label input[type='radio'] {
  display: none;
}

.colors .form .select-colors label .color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}

.colors .form .select-colors label input[type='radio']:checked + .color-dot {
  border: 2px solid #00b4d8;
}

.size-number {
  padding: 5px;
}
</style>
