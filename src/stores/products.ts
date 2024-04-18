import { defineStore } from 'pinia'

interface Product {
  image: string
  Categoria: string
  Articulo: string
  Nombre: string
  Descripcion: string
  Talles: string
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
    Talles: '',
    Precio: 11000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: '',
    Precio: 12000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 13000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 14000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 15000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
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
    Talles: '',
    Precio: 17000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: '',
    Precio: 18000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 19000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 20000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 21000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Zapatillas',
    Articulo: '086592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
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
    Talles: '',
    Precio: 23000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: '',
    Precio: 24000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Zapatillas',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 25000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 26000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 27000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Zapatillas',
    Articulo: '086592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
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
    Talles: '',
    Precio: 29000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: '',
    Precio: 30000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 31000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 32000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 33000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
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
    Talles: '',
    Precio: 35000,
    Cantidad: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '086597',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: '',
    Precio: 36000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 37000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 38000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 39000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
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
    products
  }),
  getters: {
    totalProducts() {
      let counter = 0
      this.userCart.cart?.forEach((product) => {
        counter += product.Cantidad
      })
      return counter
    }
  },
  actions: {
    addProduct(product: Product) {
      if (!this.userCart.cart.some((p) => p.Articulo === product.Articulo)) {
        product.Cantidad = 1
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
    }
  }
})
