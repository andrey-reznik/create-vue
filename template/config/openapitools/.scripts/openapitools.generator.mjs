import fs from 'node:fs'
import path from 'node:path'

/** @type {import('../.openapitools/openapitools.js').OpenAPIGeneratorCLIConfig} */
const config = {
  $schema: 'https://raw.githubusercontent.com/OpenAPITools/openapi-generator-cli/master/apps/generator-cli/src/config.schema.json',
  spaces: 2,
  'generator-cli': {
    generators: {
      'typescript-axios': {
        skipValidateSpec: true,
        generatorName: process.env.GENERATOR_NAME,
        output: process.env.OUTPUT,
        inputSpec: process.env.INPUT_SPEC,
        additionalProperties: {
          supportsES6: true,
        }
      }
    }
  }
}

fs.writeFileSync(
  path.join(path.dirname('./'), 'openapitools.json'),
  JSON.stringify(config, null, 2)
)
