import { AutoImportPlugin, ComponentsPlugin } from './auto'
import { layoutsPlugin, routerPlugin } from './routing'
import { iconsPlugin } from './icons'
import { vueDevToolsPlugin } from './devtools'
import { vueMacrosPlugin } from './macros'
import { unocssPlugin } from './unocss'
import type { PluginOption } from 'vite'

export function setupRendererPlugins(): PluginOption {
  return [
    vueMacrosPlugin(),
    AutoImportPlugin(),
    ComponentsPlugin(),
    layoutsPlugin(),
    routerPlugin(),
    iconsPlugin(),
    unocssPlugin(),
    vueDevToolsPlugin()
  ]
}
