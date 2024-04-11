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
  phone: number
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
    Precio: 17000,
    image: '/img/shoes-feature2.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086599',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 15000,
    image: '/img/shoes-feature6.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 15000,
    image: '/img/shoes-feature8.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086591',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 34000,
    image: '/img/shoes-feature9.jpg',
    Cantidad: 0
  },
  {
    Categoria: 'Borcegos',
    Articulo: '086592',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
    Precio: 22000,
    image: '/img/shoes-feature10.jpg',
    Cantidad: 0
  }
]

let userCart: UserData = {
  fullname: '',
  email: '',
  phone: null,
  cart: [],
  totalPrice: 0
}

const addProduct = (product: Product) => {
  console.log(product)
  if (!userCart.cart.some((p) => p.Articulo === product.Articulo)) {
    product.Cantidad = 1;
    userCart.cart.push(product)
  }else{
    incrementQuantity(product)
  }
}

const deleteProduct = (product: Product) => {
  userCart = userCart.cart.filter((p) => p.Articulo !== product.Articulo)
}

const getUserCart = () => {
  return userCart
}

const getCartProducts = () => {
  return userCart.cart
}

const resetCart = () => {
  userCart = { fullname: '', email: '', phone: null, cart: [] }
}

const incrementQuantity = (product: Product) => {
  const selectedProduct = userCart.cart.find((p) => p.Articulo === product.Articulo)
  if (selectedProduct) {
    selectedProduct.Cantidad++
  } else {
    addProduct(product)
  }

  console.log(userCart.cart)
}

const decrementQuantity = (product: Product) => {
  const selectedProduct = userCart.cart.find((p) => p.Articulo === product.Articulo)
  console.log(selectedProduct)
  if (selectedProduct && selectedProduct.Cantidad > 1) {
    selectedProduct.Cantidad--
  }else{
    console.log("entra")
    deleteProduct(product)
  }

  console.log(userCart.cart)

}

export {
  products,
  userCart,
  addProduct,
  deleteProduct,
  getCartProducts,
  getUserCart,
  incrementQuantity,
  decrementQuantity
}
