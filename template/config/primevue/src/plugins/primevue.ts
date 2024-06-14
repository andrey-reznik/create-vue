import type { Plugin } from 'vue'
import PrimeVue from 'primevue/config'
import aura from '@/presets/aura'

export const primevue: Plugin = {
  install(app) {
    app.use(PrimeVue, {
      unstyled: true,
      pt: aura,
      ripple: true
    })
  }
}
