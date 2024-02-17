import Layouts from 'vite-plugin-vue-layouts'
import type { PluginOption } from 'vite'
import { resolve } from 'node:path'
import VueRouter from 'unplugin-vue-router/vite'

// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
export function layoutsPlugin(): PluginOption {
  return Layouts({
    layoutsDirs: [resolve(process.cwd(), 'src/renderer/layouts')],
    defaultLayout: 'empty'
  })
}

// https://github.com/posva/unplugin-vue-router
export function routerPlugin(): PluginOption {
  return VueRouter({
    routesFolder: ['src/renderer/pages'],
    extensions: ['.vue'],
    exclude: ['**/components/**'],
    dts: 'src/renderer/types/typed-router.d.ts'
  })
}
