interface Product {
  image: string
  Categoria: string
  Articulo: string
  Nombre: string
  Descripcion: string
  Talles: string
  Precio: number
}

const products: Product[] = [
  {
    image: '/img/shoes-feature7.jpg',
    Categoria: 'Mocasines',
    Articulo: '',
    Nombre: 'Acne Baseball Cap',
    Descripcion: '',
    Talles: '',
    Precio: 0
  },
  {
    Categoria: 'Botas',
    Articulo: '',
    Nombre: 'Short Sleeve Shirt',
    Descripcion: '',
    Talles: '',
    Precio: 17000,
    image: '/img/shoes-feature2.jpg'
  },
  {
    Categoria: 'Borcegos',
    Articulo: '',
    Nombre: 'Garcons Parfums',
    Descripcion: '',
    Talles: '',
    Precio: 15000,
    image: '/img/shoes-feature6.jpg'
  },
  {
    Categoria: 'Borcegos',
    Articulo: '',
    Nombre: 'Salomon Sneakers',
    Descripcion: '',
    Talles: '',
    Precio: 15000,
    image: '/img/shoes-feature8.jpg'
  },
  {
    Categoria: 'Borcegos',
    Articulo: '',
    Nombre: 'Ribbed Beanie Hat',
    Descripcion: '',
    Talles: '',
    Precio: 34000,
    image: '/img/shoes-feature9.jpg'
  },
  {
    Categoria: 'Borcegos',
    Articulo: '',
    Nombre: 'Acronym Khaki',
    Descripcion: '',
    Talles: '',
    Precio: 22000,
    image: '/img/shoes-feature10.jpg'
  }
]

export default products
