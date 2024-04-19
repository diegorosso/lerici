import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import VueAwesomePaginate from "vue-awesome-paginate"
// import "vue-awesome-paginate/dist/style.css";

const pinia = createPinia();
const app = createApp(App)

app.use(pinia)
// app.use(VueAwesomePaginate)
app.use(router)

app.mount('#app')
