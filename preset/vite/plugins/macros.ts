import Vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'

export function vueMacrosPlugin() {
  return VueMacros({
    plugins: {
      vue: Vue()
    }
  })
}
