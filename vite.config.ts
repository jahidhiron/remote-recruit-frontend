import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const apiBaseUrl = env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1'
  // Derive the API origin (strip path) so the proxy target is just the hostname+port
  const apiOrigin = new URL(apiBaseUrl).origin      // e.g. http://localhost:3000
  const apiPath   = new URL(apiBaseUrl).pathname    // e.g. /api/v1

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
        // Forward all /api/* requests to the backend so the browser never hits CORS
        [apiPath]: {
          target: apiOrigin,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
