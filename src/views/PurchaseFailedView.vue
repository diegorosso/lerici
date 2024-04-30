<template>
  <div class="wrapper">
    <h2 class="h2 flex-row">
      <span class="highlighted"> {{ userCart?.firstname }}</span
      >, hubo un error al procesar la compra!
    </h2>
    <p>Por favor, vuelve a intentarlo.</p>

    <router-link class="btn btn-primary" to="/tienda">
      <span class="span font-weight">Volver a la tienda</span>

      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
    </router-link>
  </div>
</template>

<script setup>
const userCart = JSON.parse(localStorage.getItem('userCart'))

</script>

<style scoped>
.wrapper {
  font-family: 'Conceta', sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.highlighted {
  font-weight: 900;
  color: var(--color-green);
  margin-left: 0.3em;
}
p {
  font-size: 1.8em;
}

.btn.btn-primary{
  font-family: 'Helvetica Neue', sans-serif;
  margin-top: 2.5em;
}
</style>
