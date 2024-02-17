import { VueRouterAutoImports } from 'unplugin-vue-router'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import type { PluginOption } from 'vite'
import { resolve } from 'node:path'
import IconsResolver from 'unplugin-icons/resolver'

const cwd = process.cwd()

// https://github.com/antfu/unplugin-auto-import
export function AutoImportPlugin(): PluginOption {
  return AutoImport({
    imports: [
      'vue',
      'vue-i18n',
      'pinia',
      '@vueuse/head',
      '@vueuse/core',
      VueRouterAutoImports,
      {
        // add any other imports you were relying on
        'vue-router/auto': ['useLink']
      }
    ],
    resolvers: [IconsResolver()],
    dirs: [resolve(process.cwd(), 'src/renderer/stores')],
    dts: 'types/auto-imports.d.ts',
    vueTemplate: true
  })
}

// https://github.com/antfu/unplugin-vue-components
export function ComponentsPlugin(): PluginOption {
  return Components({
    dirs: [resolve(cwd, 'src/renderer/components')],
    dts: 'types/components.d.ts',
    include: [/\.vue$/, /\.vue\?vue/],
    directoryAsNamespace: true,
    resolvers: [IconsResolver()]
  })
}
