import './assets/style.scss'

import { createApp } from 'vue'
import { primevue } from '@/plugins/primevue'
import App from './App.vue'

const app = createApp(App)
app.use(primevue)

app.mount('#app')
