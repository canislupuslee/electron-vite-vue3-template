import { resolve } from 'node:path'
import Unocss from 'unocss/vite'

export function unocssPlugin() {
  return Unocss({
    configFile: resolve(process.cwd(), 'preset/vite/uno.config.ts')
  })
}
