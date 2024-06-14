import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { primevue } from '@/plugins/primevue'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(primevue)

app.mount('#app')
