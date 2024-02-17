import './assets/main.css'

import { createApp } from 'vue'
import App from '@renderer/App.vue'
import Router from '@renderer/router'
import { Internationalization } from '../shared/utils/i18n'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'

const app = createApp(App)
app.use(Internationalization.getInstance().i18n)
app.use(Router)
app.mount('#app')
