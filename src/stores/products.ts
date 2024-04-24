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

interface CartProduct {
  Imagen: string
  Categoria: string
  Articulo: string
  Nombre: string
  Descripcion: string
  Talle: string
  Precio: number
  Cantidad: number
}

interface UserData {
  fullname: string
  email: string
  phone: number | null
  cart: CartProduct[]
  totalPrice: number
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    userCart: {
      fullname: '',
      email: '',
      phone: null,
      cart: [],
      totalPrice: 0
    } as UserData,
    products: [] as any[]
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
      cart.forEach((product: CartProduct) => {
        total += product.Precio * product.Cantidad
      })
      return total
    }
  },
  actions: {
    addProduct(product: CartProduct) {
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
    deleteProduct(product: CartProduct) {
      this.userCart.cart = this.userCart.cart.filter((p) => p.Articulo !== product.Articulo)
    },
    getCartProducts(): CartProduct[] {
      return this.userCart.cart
    },
    getUserCart(): UserData {
      return this.userCart
    },
    resetCart() {
      this.userCart = { fullname: '', email: '', phone: null, cart: [], totalPrice: 0 }
    },
    incrementQuantity(product: CartProduct) {
      const selectedProduct = this.userCart.cart.find((p) => p.Articulo === product.Articulo)
      if (selectedProduct) {
        selectedProduct.Cantidad++
      } else {
        console.error('Product not found in cart')
      }
    },
    decrementQuantity(product: CartProduct) {
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

      let allProducts: any[] = []

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
        const keys: any[] = []
        sheetValues.data.values.forEach((row: any, i: any) => {
          const obj: any = {}
          row.forEach((cell: any, index: any) => {
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
          obj.Talles = obj.Talles.map((i: string) => i.trim())
          obj.Precio = obj.Precio.replace('.', '')

          allProducts.push(obj)
        })
        allProducts.shift()
        allProducts = this.addImages(allProducts)

        this.products = allProducts
        // return products
      } catch (error) {
        console.log(error)
      }
    },
    addImages(products: any[]) {
      const context = import.meta.glob('../assets/images/products/*.jpg')
      const imageNames = Object.keys(context).map((key) =>
        key.replace(/^..\/assets\/images\/products\/|\.jpg$/g, '')
      )
      const newProducts = products.map((p: any) => {
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
