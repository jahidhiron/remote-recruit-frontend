import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const apiBaseUrl = env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1'
  const apiOrigin  = new URL(apiBaseUrl).origin    // e.g. http://localhost:3000
  const apiPath    = new URL(apiBaseUrl).pathname  // e.g. /api/v1

  return {
    plugins: [react()],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      port: parseInt(env.VITE_APP_PORT) || 5173,
      proxy: {
        // Forward /api/v1/* to the backend — eliminates CORS issues in dev
        [apiPath]: {
          target: apiOrigin,
          changeOrigin: true,
          secure: false,
        },
      },
    },

    build: {
      // Increase warning threshold slightly to avoid noise from known large deps
      chunkSizeWarningLimit: 600,

      rollupOptions: {
        output: {
          manualChunks: {
            // Core React runtime — most stable, best for long-term caching
            'vendor-react': ['react', 'react-dom'],
            // Redux stack — updates together
            'vendor-redux': [
              '@reduxjs/toolkit',
              'react-redux',
              'redux-saga',
              'redux-persist',
            ],
            // Utility libs
            'vendor-utils': ['axios', 'clsx', 'tailwind-merge', 'lodash.debounce'],
            // Icon library — large but rarely changes
            'vendor-icons': ['lucide-react'],
          },
        },
      },
    },
  }
})
