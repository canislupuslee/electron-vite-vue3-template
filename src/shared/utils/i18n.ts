/* eslint-disable @typescript-eslint/no-explicit-any */
import { createI18n } from 'vue-i18n'

import { isRendererProcess } from './is'

import enUS from '../locales/en-US.json'
import zhCN from '../locales/zh-CN.json'

export class Internationalization {
  private static instance: Internationalization
  i18n: ReturnType<typeof createI18n>

  private constructor() {
    this.i18n = createI18n({
      legacy: !isRendererProcess(),
      locale: 'zh-CN',
      messages: {
        'en-US': enUS,
        'zh-CN': zhCN
      }
    })
  }

  static getInstance(): Internationalization {
    if (!Internationalization.instance) {
      Internationalization.instance = new Internationalization()
    }
    return Internationalization.instance
  }

  async changeLanguage(lang: string) {
    if (isRendererProcess()) {
      ;(this.i18n.global.locale as any).value = lang
    } else {
      this.i18n.global.locale = lang
    }
  }

  t(key: string, values?: Record<string, string>) {
    return (this.i18n.global.t as any)(key, values)
  }
  te(key: string, locale?: string) {
    return (this.i18n.global.te as any)(key, locale)
  }
  getLocale() {
    return (this.i18n.global.locale as any).value
  }
}
