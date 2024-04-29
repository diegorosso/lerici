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
  firstname: string
  lastname: string
  email: string
  phone: number | null
  cash: boolean | null
  date: Date | null
  cart: CartProduct[]
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    userCart: {
      firstname: '',
      lastname: '',
      email: '',
      phone: null,
      cash: null,
      date: null,
      cart: []
    } as UserData,
    products: [] as any[],
    isModalOpen: false as boolean
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
    handleModal() {
      this.isModalOpen = !this.isModalOpen
    },
    setUser(user: UserData) {
      this.userCart.firstname = `${user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}`
      this.userCart.lastname = `${user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}`
      this.userCart.email = user.email
      this.userCart.phone = user.phone
      this.userCart.cash = user.cash
      this.userCart.date = user.date
    },
    addProduct(product: CartProduct) {
      if (
        !this.userCart.cart.some((p) => p.Nombre === product.Nombre) ||
        this.userCart.cart.some((p) => p.Nombre === product.Nombre && p.Talle !== product.Talle)
      ) {
        if (
          this.userCart.cart.some((p) => p.Nombre === product.Nombre && p.Talle === product.Talle)
        ) {
          this.incrementQuantity(product)
        }

        if (!product.Cantidad) product.Cantidad = 1

        // product.Precio = 1
        this.userCart.cart.push(product)
      } else {
        this.incrementQuantity(product)
      }
    },
    deleteProduct(product: CartProduct) {
      this.userCart.cart = this.userCart.cart.filter(
        (p) => !(p.Nombre === product.Nombre && p.Talle === product.Talle)
      )
    },
    getCartProducts(): CartProduct[] {
      return this.userCart.cart
    },
    getUserCart(): UserData {
      return this.userCart
    },
    resetUserData() {
      this.userCart = {
        firstname: '',
        lastname: '',
        email: '',
        phone: null,
        cash: null,
        date: null,
        cart: []
      }
    },
    resetCart() {
      this.userCart.cash = null
      this.userCart.date = null
      this.userCart.cart = []
    },
    incrementQuantity(product: CartProduct) {
      const selectedProduct = this.userCart.cart.find(
        (p) => p.Nombre === product.Nombre && p.Talle === product.Talle
      )
      if (selectedProduct) {
        // const quantity = product.Cantidad ? product.Cantidad : 1;
        selectedProduct.Cantidad++
      } else {
        console.error('Product not found in cart')
      }
    },
    decrementQuantity(product: CartProduct) {
      const selectedProduct = this.userCart.cart.find(
        (p) => p.Nombre === product.Nombre && p.Talle === product.Talle
      )
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
      const context = import.meta.glob('../../public/img/products/*.jpg')
      const imageNames = Object.keys(context).map((key) =>
        key.replace(/^..\/..\/public\/img\/products\/|\.jpg$/g, '')
      )
      const newProducts = products.map((p: any) => {
        const img = imageNames.find((i) => i.toLowerCase() === p.Nombre.toLowerCase())
        if (img) {
          return { ...p, Imagen: `/img/products/${img}.jpg` }
        } else {
          return { ...p, Imagen: null }
        }
      })

      return newProducts
    }
  }
})
