import { defineConfig } from 'electron-vite'
import { bytecodePlugin, externalizeDepsPlugin, swcPlugin } from 'electron-vite'
import { setupRendererPlugins } from './plugins'
import { rendererAlias, mainAlias, preloadAlias } from './alias'
import { resolve } from 'node:path'
import { proxy } from './server/proxy'

export default defineConfig(() => {
  const envDir = resolve(process.cwd(), 'preset/env')
  return {
    main: {
      envDir,
      resolve: {
        alias: mainAlias
      },
      plugins: [externalizeDepsPlugin(), bytecodePlugin(), swcPlugin()]
    },
    preload: {
      envDir,
      resolve: {
        alias: preloadAlias
      },
      plugins: [externalizeDepsPlugin(), bytecodePlugin()]
    },
    renderer: {
      envDir,
      resolve: {
        alias: rendererAlias
      },
      plugins: [setupRendererPlugins()],
      server: {
        proxy
      }
    }
  }
})
