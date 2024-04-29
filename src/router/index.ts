import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ResumeView from '../views/ResumeView.vue'
import PurchaseSuccessView from '../views/PurchaseSuccessView.vue'
import PurchaseFailedView from '../views/PurchaseFailedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/producto/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/exito',
      name: 'success',
      component: PurchaseSuccessView
    },
    {
      path: '/falla',
      name: 'failed',
      component: PurchaseFailedView
    },
    {
      path: '/resumen',
      name: 'resume',
      component: ResumeView
    },
    {
      path: '/tienda',
      name: 'store',
      component: StoreView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
