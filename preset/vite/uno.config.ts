import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  // presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

function generateColorCombinations(): Record<string, string> {
  const colorTypes = ['primary', 'info', 'success', 'warning', 'error']
  const colorScenes = ['hover', 'pressed', 'focus', 'disabled']
  const result: Record<string, string> = {}
  for (const type of colorTypes) {
    result[type] = `rgba(var(--n-${type}-color))`
    for (let i = 1; i <= 10; i++) result[`${type}-${i}`] = `rgba(var(--n-${type}-color-${i}))`

    for (const scene of colorScenes)
      result[`${type}-${scene}`] = `rgba(var(--n-${type}-color-${scene}))`
  }
  return result
}

export default defineConfig({
  shortcuts: [
    // {
    //   'flex-items-center': 'flex items-center',
    //   'flex-justify-center': 'flex justify-center',
    //   'flex-center': 'flex items-center justify-center'
    // }
  ],
  rules: [
    ['drag-yes', { '-webkit-app-region': 'drag', 'user-select': 'none' }],
    ['drag-no', { '-webkit-app-region': 'no-drag' }]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1
    }),
    presetTypography()
  ],
  transformers: [
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno']
    }),
    transformerVariantGroup()
  ],
  // safelist: 'prose m-auto text-left'.split(' '),
  theme: {
    colors: {
      // 生成如下颜色数据
      // 'primary': 'rgba(var(--n-primary-color))'
      // 'primary-1': 'rgba(var(--n-primary-color-1))',
      // 'primary-hover': 'rgba(var(--n-primary-color-hover))',
      // ...其他
      ...generateColorCombinations()
    }
  }
})
