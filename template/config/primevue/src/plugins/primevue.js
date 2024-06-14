import PrimeVue from 'primevue/config'
import aura from '@/presets/aura'

/** @type { import('vue').Plugin } */
export const primevue: Plugin = {
  install(app) {
    app.use(PrimeVue, {
      unstyled: true,
      pt: aura,
      ripple: true
    })
  }
}
