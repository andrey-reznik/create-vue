import fs from 'node:fs'

const filePath = `${process.env.OUTPUT}/base.ts`
const searchString = 'export const BASE_PATH = "http://localhost".replace(/\\/+$/, "")'
const replacementString = 'export const BASE_PATH = ""'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка при чтении файла:', err)
    return
  }

  const updatedData = data.replace(searchString, replacementString)

  // Записываем обновленные данные обратно в файл
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('Ошибка при записи файла:', err)
      return
    }

    console.log('Файл успешно обновлен.')
  })
})
