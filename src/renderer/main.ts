import './assets/main.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import Router from '@renderer/router'
import { Internationalization } from '../shared/utils/i18n'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia.use(piniaPluginPersistedstate))
app.use(Internationalization.getInstance().i18n)
app.use(Router)
app.mount('#app')
