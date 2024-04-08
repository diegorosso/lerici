import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
