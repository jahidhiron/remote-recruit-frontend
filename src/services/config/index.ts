export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'https://api.remoterecruit.com/api/v1'

export const APP_ENV = import.meta.env.VITE_APP_ENV ?? 'production'

export const APP_PORT = import.meta.env.VITE_APP_PORT ?? '5173'

export const REDUX_PERSIST_KEY =
  import.meta.env.VITE_REDUX_PERSIST_KEY ?? 'remote-recruit'

export const isProd = import.meta.env.PROD

export const isDev = import.meta.env.DEV
