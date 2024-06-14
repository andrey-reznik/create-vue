import favicons from 'favicons'
import fs from 'fs/promises'
import path from 'path'

const { APP_NAME, APP_SHORT_NAME, APP_DESCRIPTION } = process.env

const src = './public/favicon.svg'
const dest = './public'
const htmlBasename = 'meta.html'

/** @type {import('favicons').FaviconOptions} */
const configuration = {
  path: '/',
  scope: '',
  appName: APP_NAME,
  appShortName: APP_SHORT_NAME,
  appDescription: APP_DESCRIPTION,
  lang: 'ru-RU',
  developerName: 'Andrey Reznik <andrey.reznik@qummy.ru>',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: true,
    yandex: true
  }
}

const response = await favicons(src, configuration)
await fs.mkdir(dest, { recursive: true })
await Promise.all(
  response.images.map(
    async (image) => await fs.writeFile(path.join(dest, image.name), image.contents)
  )
)
await Promise.all(
  response.files.map(async (file) => await fs.writeFile(path.join(dest, file.name), file.contents))
)

await fs.writeFile(path.join(dest, htmlBasename), response.html.join('\n'))
