import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      assets: "/src/assets",
      components: "/src/components",
      contexts: "/src/contexts",
      helpers: "/src/helpers",
      hooks: "/src/hooks",
      layouts: "/src/layouts",
      pages: "/src/pages",
      store: "/src/store",
      templates: "/src/templates",
      icons: "/src/assets/icons",
      mixins: "/src/assets/styles/_mixins.scss"
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "assets/styles/_mixins.scss" as *;'
      }
    }
  },
  plugins: [react()],
})
