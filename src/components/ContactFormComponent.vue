<template>
  <div class="container-contact" id="contacto">
    <div class="item-contact">
      <div v-if="showSuccesfulMsg || showErrorMsg || showSpinner" class="pop-up-container">
        <div :class="{ visible: showSuccesfulMsg }" class="pop-up">
          El mensaje ha sido enviado de manera exitosa!
        </div>
        <div :class="{ visible: showErrorMsg }" class="pop-up">
          El mensaje no ha podido enviarse debido a un error inesperado, por favor vuelva a
          intentarlo!
        </div>
      </div>
      <div class="contact">
        <img src="/src/assets/images/logo.png" class="logo-width" alt="" />
        <div class="photo-style">
          <img src="/src/assets/images/hero-banner.png" alt="" class="img-contact" />
        </div>
      </div>
      <div class="submit-form">
        <h4 class="third-text">Contacto</h4>
        <form class="class-form" action="" @submit.prevent="sendEmail">
          <div class="input-box">
            <input type="text" class="input" required v-model="formData.firstname" />
            <label for="">Nombre</label>
          </div>
          <div class="input-box">
            <input type="email" class="input" required v-model="formData.email" />
            <label for="">Email</label>
          </div>
          <div class="input-box">
            <input type="number" class="input" required v-model="formData.phone" />
            <label for="">Teléfono</label>
          </div>
          <div class="input-box">
            <textarea
              name=""
              class="input"
              required
              id="message"
              cols="30"
              rows="10"
              v-model="formData.message"
            ></textarea>
            <label for="">Mensaje</label>
          </div>
          <div class="button-width">
            <button class="btn btn-contact" type="submit">
              <span v-if="!showSpinner">
                Enviar
              </span>
              <span>
                <VueSpinner v-if="showSpinner" size="30" color="var(--color-eerie-black)" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { VueSpinner } from 'vue3-spinners'

let showSpinner = ref(false)
let showSuccesfulMsg = ref(false)
let showErrorMsg = ref(false)

const formData = ref({
  firstname: '',
  lastname: '',
  phone: '',
  email: '',
  message: ''
})

const sendEmail = async () => {
  showSpinner.value = true;
  let data = {
    service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    user_id: import.meta.env.VITE_EMAILJS_USER_ID,
    accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    template_params: {
      to_email: 'macakiven@gmail.com',
      from_name: formData.value.firstname,
      from_lastname: formData.value.lastname,
      from_phone: formData.value.phone,
      from_email: formData.value.email,
      message: formData.value.message
    }
  }
  try {
    const url = 'https://api.emailjs.com/api/v1.0/email/send'
    await axios.post(url, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    showSpinner.value = false;
    showSuccesfulMsg.value = true
    setTimeout(() => {
      showSuccesfulMsg.value = false
    }, 2000)

    formData.value = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      message: ''
    }
  } catch (error) {
    showSpinner.value = false;
    showErrorMsg.value = true
    setTimeout(() => {
      showErrorMsg.value = false
    }, 1000)
    console.log({ error })
  }
}
</script>

<style scoped>
.pop-up-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 9;
}
.pop-up {
  visibility: hidden;
  font-weight: 500;
  width: 400px;
  right: calc(50% - 400px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  background-color: var(--color-blue);
  color: var(--color-light-blue);
  transition: all 500ms ease-in;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
}
.container-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  background: var(--color-light-blue);
}

.item-contact {
  position: relative;
  width: 100%;
  height: 550px;
  max-width: 1000px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
}

.contact {
  background: var(--color-light-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.submit-form {
  background: var(--color-red);
}

.first-text {
  color: var(--color-blue);
  padding-left: 20px;
  padding-top: 20px;
  font-size: 35px;
}

.img-contact {
  height: 300px;
  width: 320px;
}

.third-text {
  font-family: 'Conceta';
  font-size: 4rem;
  position: relative;
  left: 20px;
  color: var(--color-light-blue);
}

.class-form {
  padding: 0 50px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.input-box {
  height: 40px;
  width: 100%;
  margin: 30px 0;
  position: relative;
}

.input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: 2px solid var(--color-light-blue);
  padding-left: 10px;
  color: var(--color-light-blue);
  font-size: 16px;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 10px;
  padding-left: 10px;
  transform: translateY(-50%);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-light-blue);
  transition: 0.3s;
}

.input-box .input:focus ~ label,
.input-box .input:valid ~ label {
  top: -1px;
  left: 10px;
  background: var(--color-red);
  font-weight: 500;
  font-size: 12px;
  padding: 5px;
}

textarea.input {
  resize: none;
  min-height: 150px;
  overflow: auto;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}

.btn-contact {
  position: relative;
  top: 106px;
  background: var(--color-light-blue);
  outline: none;
  font-weight: bold;
  padding: 10px 25px;
  cursor: pointer;
}

.logo-width {
  padding: 20px 0 0 0;
  width: 75%;
}

.photo-style {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}

.button-width {
  display: flex;
  justify-content: end;
  width: 100%;
  cursor: pointer;
}

@media (max-width: 570px) {
  .item-contact {
    grid-template-columns: none;
    margin-top: 10rem;
  }

  .contact {
    display: none;
  }
}

@media (max-width: 1280px) {
  .container-contact {
    width: 60%;
  }
}
</style>
