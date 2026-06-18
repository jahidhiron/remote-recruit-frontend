/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string
  readonly VITE_APP_PORT: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_REDUX_PERSIST_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
