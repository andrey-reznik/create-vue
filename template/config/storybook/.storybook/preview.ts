import '../src/assets/style.scss'
import { type Preview, setup } from '@storybook/vue3'
import { primevue } from '../src/plugins/primevue'

setup((app) => {
  app.use(primevue)
})

const preview: Preview = {
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
