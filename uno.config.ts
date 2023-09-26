import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      prefix: ''
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        'space-mono': 'Space Mono:400',
        'space-grotesk': 'Space Grotesk:400,500'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
