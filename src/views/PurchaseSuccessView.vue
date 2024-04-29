<template>
  <div class="wrapper">
    <h2 class="h2 flex-row">
      ¡Gracias por elegirnos, <span class="highlighted"> {{ userCart.firstname }}</span
      >!
    </h2>
    <p>Su pedido ha sido procesado.</p>
    <p>Le enviaremos más información a {{ userCart.email }}</p>
  </div>
</template>

<script setup>
// import { useProductsStore } from '../stores/products.ts'
import { onMounted } from 'vue'
import axios from 'axios'
import pdfmake from 'pdfmake'
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from '../assets/fonts/vfs_fonts.js'

pdfMake.vfs = pdfFonts

// const store = useProductsStore()
const templateUser = import.meta.env.VITE_EMAILJS_TEMPLATE_USER_PURCHASE
const templateClient = import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT_PURCHASE
const userCart = JSON.parse(localStorage.getItem("userCart"))
const totalPrice = JSON.parse(localStorage.getItem("totalPrice"))

onMounted(async () => {
  const pdf = await generatePdf(userCart.date)

  await sendEmail(pdf, templateClient)
  await sendEmail(pdf, templateUser)

  // store.resetCart()
})

const generatePdf = async (formatedDate) => {
  let tableRows = [['Cantidad', 'Nombre', 'Talle', 'Precio unitario']]
  userCart.cart.forEach((p) => {
    let row = [p.Cantidad, p.Nombre, p.Talle, p.Precio]
    tableRows.push(row)
  })
  const docDefinition = {
    pageMargins: [40, 60, 40, 60],
    header: {
      text: formatedDate,
      style: 'header'
    },
    content: [
      {
        text: `Pedido de ${userCart.firstname} ${userCart.lastname}`,
        style: 'body'
      },
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: tableRows,
          style: 'table'
        }
      },
      {
        text: `Total: ${totalPrice}`,
        style: 'total'
      }
    ],
    footer: {
      text: 'Lerici Boots',
      style: 'footer'
    },
    styles: {
      header: {
        fontSize: 12,
        italics: true,
        alignment: 'right',
        margin: [20, 20]
      },
      body: {
        fontSize: 12,
        margin: [0, 20]
      },
      footer: {
        fontSize: 14,
        alignment: 'right',
        margin: [20, 0]
      },
      total: {
        fontSize: 12,
        alignment: 'right',
        bold: true,
        margin: [0, 20]
      }
    }
  }

  return new Promise((resolve, reject) => {
    pdfmake.createPdf(docDefinition).getBase64(async (data) => {
      try {
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  })
}

const sendEmail = async (pdf, templateId) => {
  let data = {
    service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template_id: templateId,
    user_id: import.meta.env.VITE_EMAILJS_USER_ID,
    accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    template_params: {
      client_name: 'Lerici Boots',
      client_phone: '+54 911 27957486',
      client_email: 'macarenaquiven@gmail.com',
      // client_phone: '+54 911 27693948',
      // client_email: 'bautistadcarucci@gmail.com',
      user_name: userCart.firstname,
      user_lastname: userCart.lastname,
      user_email: userCart.email,
      user_phone: userCart.phone,
      date: userCart.date,
      cash: userCart.cash ? 'Si' : 'No',
      content: pdf
    }
  }

  const maxRetries = 3 // Número máximo de intentos de envío
  let retries = 0

  while (retries < maxRetries) {
    try {
      const url = 'https://api.emailjs.com/api/v1.0/email/send'
      await axios.post(url, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      break
    } catch (error) {
      console.log('Error al enviar el correo electrónico. Reintentando...')
      retries++
    }
  }

  if (retries === maxRetries) {
    console.log('Se alcanzó el número máximo de intentos sin éxito.')
  }

  localStorage.clear()
}
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
</style>
