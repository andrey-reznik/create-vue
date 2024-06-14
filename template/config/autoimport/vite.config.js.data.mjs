export default function getData({ oldData }) {
  const autoimportPlugin = [
    {
      id: 'AutoImport',
      importer: 'import AutoImport from \'unplugin-auto-import/vite\'\nimport { VueRouterAutoImports } from \'unplugin-vue-router\'',
      initializer: 'AutoImport({ imports: [VueRouterAutoImports] })'
    },
    {
      id: 'Components',
      importer: 'import Components from \'unplugin-vue-components/vite\'\nimport { PrimeVueResolver } from \'unplugin-vue-components/resolvers\'',
      initializer: 'Components({ resolvers: [PrimeVueResolver()] })'
    }
  ]

  return {
    ...oldData,
    plugins: [...oldData.plugins, ...autoimportPlugin]
  }
}


// export default function getData({ oldData }) {
//   const autoimportPlugin = [
//     {
//       id: 'AutoImport',
//       importer: [
//         'import AutoImport from \'unplugin-auto-import/vite\'',
//         'import { VueRouterAutoImports } from \'unplugin-vue-router\''
//       ],
//       initializer: 'AutoImport({ imports: [VueRouterAutoImports] })'
//     },
//     {
//       id: 'Components',
//       importer: [
//         'import Components from \'unplugin-vue-components/vite\'',
//         'import { PrimeVueResolver } from \'unplugin-vue-components/resolvers\''
//       ],
//       initializer: 'Components({ resolvers: [PrimeVueResolver()] })'
//     }
//   ]
//
//   return {
//     ...oldData,
//     plugins: [...oldData.plugins, ...autoimportPlugin]
//   }
// }
