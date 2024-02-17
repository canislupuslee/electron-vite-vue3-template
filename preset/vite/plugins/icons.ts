import Icons from 'unplugin-icons/vite'
import type { PluginOption } from 'vite'

// https://github.com/unplugin/unplugin-icons
export function iconsPlugin(): PluginOption {
  return Icons({
    compiler: 'vue3',
    scale: 1,
    autoInstall: true
  })
}
