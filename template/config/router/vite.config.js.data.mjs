export default function getData({ oldData }) {
  const unpluginVueRouter = {
    id: 'VueRouter',
    importer: 'import VueRouter from \'unplugin-vue-router/vite\'',
    initializer: 'VueRouter()'
  }

  const plugins = oldData.plugins.flatMap((plugin) => {
      if (plugin.id === 'vue') {
        return [unpluginVueRouter, plugin]
      } else if (plugin.id !== unpluginVueRouter.id) {
        return plugin
      }
    }
  )

  return {
    ...oldData,
    // Append the unpluginVueRouter plugin right before the vue plugin
    plugins: plugins.filter((plugin) => plugin !== undefined),
  }
}
