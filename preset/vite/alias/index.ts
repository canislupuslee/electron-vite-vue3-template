import { resolve } from 'node:path'

export const mainAlias = {}

export const preloadAlias = {}

export const rendererAlias = {
  '@renderer': resolve(process.cwd(), 'src/renderer')
}
