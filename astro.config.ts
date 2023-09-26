import { defineConfig } from 'astro/config'

import unocss from 'unocss/astro'

export default defineConfig({
  site: 'https://dreisss.me',
  image: {
    service: {
      entrypoint: 'astro/assets/services/squoosh'
    }
  },
  integrations: [
    unocss({
      injectReset: true
    })
  ]
})
