import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { primevue } from '@/plugins/primevue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(createPinia())
app.use(primevue)
app.use(router)

app.mount('#app')
