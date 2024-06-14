import '../src/assets/style.scss'
import { setup } from '@storybook/vue3'
import { primevue } from '../src/plugins/primevue'

setup((app) => {
  app.use(primevue)
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
