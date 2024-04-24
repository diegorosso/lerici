import { defineStore } from 'pinia'
import axios from 'axios'

interface Product {
  Imagen: string
  Categoria: string
  Articulo: string
  Nombre: string
  Descripcion: string
  Talles: string[]
  Precio: number
  Cantidad: number
}

interface UserData {
  fullname: string
  email: string
  phone: number | null
  cart: Product[]
  totalPrice: number
}

const products: Product[] = [
  {
    image: '/img/shoes-feature7.jpg',
    Categoria: 'Mocasines',
    Articulo: '086596',
    Nombre: 'Acne Baseball Cap',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 11000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 12000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 13000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 14000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 15000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086542',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 16000,
    image: '/img/shoes-feature10.jpg',
    Cantidad: 0
  },

  {
    image: '/img/shoes-feature7.jpg',
    Categoria: 'Mocasines',
    Articulo: '086596',
    Nombre: 'Acne Baseball Cap',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 17000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 18000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 19000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '081392',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 20000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 21000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Zapatillas',
    Articulo: '987654',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 22000,
    image: '/img/shoes-feature10.jpg',
    Cantidad: 0
  },
  {
    image: '/img/shoes-feature7.jpg',
    Categoria: 'Mocasines',
    Articulo: '086596',
    Nombre: 'Acne Baseball Cap',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 23000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 24000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Zapatillas',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 25000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '080292',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 26000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 27000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Zapatillas',
    Articulo: '087592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 28000,
    image: '/img/shoes-feature10.jpg',
    Cantidad: 0
  },
  {
    image: '/img/shoes-feature7.jpg',
    Categoria: 'Mocasines',
    Articulo: '086596',
    Nombre: 'Acne Baseball Cap',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 29000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 30000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 31000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '038592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 32000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 33000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '0785592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 34000,
    image: '/img/shoes-feature10.jpg',
    Cantidad: 0
  },
  {
    image: '/img/shoes-feature7.jpg',
    Categoria: 'Mocasines',
    Articulo: '086596',
    Nombre: 'Acne Baseball Cap',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 35000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 36000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 37000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '08215492',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 38000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 39000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '0654987592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: ['35-1', '35 1/2- 1', '36-1', '36 1/2- 1', '37-1', '38-1', '39-1'],
    Precio: 40000,
    image: '/img/shoes-feature10.jpg',
    Cantidad: 0
  }
]

export const useProductsStore = defineStore('products', {
  state: () => ({
    userCart: {
      fullname: '',
      email: '',
      phone: null,
      cart: [],
      totalPrice: 0
    } as UserData,
    products: []
  }),
  getters: {
    totalProducts() {
      let counter = 0
      this.userCart.cart?.forEach((product) => {
        counter += product.Cantidad
      })
      return counter
    },
    totalPrice() {
      const cart = this.userCart.cart
      let total = 0
      cart.forEach((product: Product) => {
        total += product.Precio * product.Cantidad
      })
      return total
    }
  },
  actions: {
    addProduct(product: Product) {
      if (
        !this.userCart.cart.some((p) => p.Nombre === product.Nombre) ||
        this.userCart.cart.some((p) => p.Nombre === product.Nombre && p.Talle !== product.Talle)
      ) {
        if (!product.Cantidad) product.Cantidad = 1

        this.userCart.cart.push(product)
      } else {
        this.incrementQuantity(product)
      }
    },
    deleteProduct(product: Product) {
      this.userCart.cart = this.userCart.cart.filter((p) => p.Articulo !== product.Articulo)
    },
    getCartProducts(): Product[] {
      return this.userCart.cart
    },
    getUserCart(): UserData {
      return this.userCart
    },
    resetCart() {
      this.userCart = { fullname: '', email: '', phone: null, cart: [], totalPrice: 0 }
    },
    incrementQuantity(product: Product) {
      const selectedProduct = this.userCart.cart.find((p) => p.Articulo === product.Articulo)
      if (selectedProduct) {
        selectedProduct.Cantidad++
      } else {
        console.error('Product not found in cart')
      }
    },
    decrementQuantity(product: Product) {
      const selectedProduct = this.userCart.cart.find((p) => p.Articulo === product.Articulo)
      if (selectedProduct && selectedProduct.Cantidad > 1) {
        selectedProduct.Cantidad--
      } else {
        this.deleteProduct(product)
      }
    },
    async setAllProducts() {
      const sheetsApi = 'https://sheets.googleapis.com'
      const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID
      const apiKey = import.meta.env.VITE_API_KEY

      let allProducts = []

      // GET GOOGLE SHEETS DATA:
      try {
        const sheetData = await axios({
          method: 'get',
          url: `${sheetsApi}/v4/spreadsheets/${spreadsheetId}`,
          params: {
            key: apiKey
          }
        })
        const endRange = sheetData.data.sheets[0].properties.gridProperties.rowCount
        const range = `A1:F${endRange}`

        const sheetValues = await axios({
          method: 'get',
          url: `${sheetsApi}/v4/spreadsheets/${spreadsheetId}/values/${range}`,
          params: {
            key: apiKey
          }
        })
        const keys = []
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

          obj.Talles = obj.Talles.split(' ')
          obj.Talles = obj.Talles.map((i) => i.trim())
          obj.Precio = obj.Precio.replace('.', '')

          allProducts.push(obj)
        })
        allProducts.shift()
        allProducts = this.addImages(allProducts)

        this.products = allProducts
        return products
      } catch (error) {
        console.log(error)
      }
    },
    addImages(products) {
      const context = import.meta.glob('../assets/images/products/*.jpg')
      const imageNames = Object.keys(context).map((key) =>
        key.replace(/^..\/assets\/images\/products\/|\.jpg$/g, '')
      )
      const newProducts = products.map((p) => {
        const img = imageNames.find((i) => i.toLowerCase() === p.Nombre.toLowerCase())
        if (img) {
          return { ...p, Imagen: `/src/assets/images/products/${img}.jpg` }
        } else {
          return { ...p, Imagen: null }
        }
      })

      return newProducts
    }
  }
})
