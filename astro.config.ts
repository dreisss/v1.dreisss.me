import { defineConfig, passthroughImageService } from 'astro/config'

import unocss from 'unocss/astro'

export default defineConfig({
  site: 'https://v1.dreisss.me',
  image: {
    service: passthroughImageService()
  },
  integrations: [
    unocss({
      injectReset: true
    })
  ]
})
