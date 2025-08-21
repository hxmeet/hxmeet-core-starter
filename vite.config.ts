import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    ui({
      ui: {
        colors: {
          primary: 'rose',
          neutral: 'neutral'
        }
      }
    })
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Nitro dev-port
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
