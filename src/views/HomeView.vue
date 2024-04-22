<template>
  <HomeComponent></HomeComponent>
  <NewsComponent v-if="store.products.length >= 1"></NewsComponent>
  <AboutUsComponent></AboutUsComponent>
  <FeatureComponent v-if="store.products.length >= 1"></FeatureComponent>
  <OfferComponent></OfferComponent>
</template>

<script setup>
import HomeComponent from '../components/HomeComponent.vue'
import NewsComponent from '../components/NewsComponent.vue'
import AboutUsComponent from '../components/AboutUsComponent.vue'
import FeatureComponent from '../components/FeatureComponent.vue'
import OfferComponent from '../components/OfferComponent.vue'
import { onMounted } from 'vue'
import axios from 'axios'
import { useProductsStore } from '../stores/products.ts'

const store = useProductsStore()
let products = []

onMounted( async() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  if(store.products.length === 0){
    products = await getProducts()
    store.setAllProducts(products)
  }

})

const getProducts = async () => {
  const sheetsApi = 'https://sheets.googleapis.com'
  const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID
  const apiKey = import.meta.env.VITE_API_KEY

  let products = []

  // GET GOOGLE SHEETS DATA:
  try {
    let sheetData = await axios({
      method: 'get',
      url: `${sheetsApi}/v4/spreadsheets/${spreadsheetId}`,
      params: {
        key: apiKey
      }
    })
    let endRange = sheetData.data.sheets[0].properties.gridProperties.rowCount
    let range = `A1:F${endRange}`

    let sheetValues = await axios({
      method: 'get',
      url: `${sheetsApi}/v4/spreadsheets/${spreadsheetId}/values/${range}`,
      params: {
        key: apiKey
      }
    })
    let keys = []
    sheetValues.data.values.forEach((row, i) => {
      let obj = {}
      row.forEach((cell, index) => {
        if (i === 0) {
          keys.push(cell)
        }
        if (index === 0) obj[keys[0].replace(/ /g, '')] = cell
        if (index === 1) obj[keys[1].replace(/ /g, '')] = cell
        if (index === 2) {
          obj[keys[2]] = cell
        }
        if (index === 3) obj[keys[3].replace(/ /g, '')] = cell
        if (index === 4) obj[keys[4].replace(/ /g, '')] = cell
      })

      obj.Talles = obj.Talles.split('.')
      obj.Talles = obj.Talles.map((i) => i.trim())
      obj.Precio = obj.Precio.replace('.', '')

      products.push(obj)
    })
    products.shift()
    products = addImages(products)

    return products
  } catch (error) {
    console.log(error)
  }
}

const addImages = (products) => {
  const context = import.meta.glob('../../public/img/products/*.jpg')
  const imageNames = Object.keys(context).map((key) =>
    key.replace(/^..\/..\/public\/img\/products\/|\.jpg$/g, '')
  )

  let newProducts = products.map((p) => {
    let img = imageNames.find((i) => i === p.Nombre)
    if (img) {
      return { ...p, Imagen: `/img/products/${img}.jpg` }
    } else {
      return { ...p, Imagen: null }
    }
  })

  return newProducts
}
</script>
