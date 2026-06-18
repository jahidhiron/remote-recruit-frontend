import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { API_BASE_URL, isProd } from '@/services/config'
import { getValueSafely } from './get-value-safely'

// ─── Types ───────────────────────────────────────────────────────────────────

type RetryableConfig = InternalAxiosRequestConfig & { _retry?: boolean }

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Reads the stored access token (set by auth saga after login). */
function getAccessToken(): string | null {
  return localStorage.getItem('accessToken')
}

/** Generates a short random request ID for distributed tracing / log correlation. */
function generateRequestId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`
}

/** Dev-only request logger. */
function logRequest(config: InternalAxiosRequestConfig): void {
  if (isProd) return
  const method = config.method?.toUpperCase() ?? 'GET'
  const url = `${config.baseURL ?? ''}/${config.url ?? ''}`
  console.groupCollapsed(`[HTTP] → ${method} ${url}`)
  if (config.params) console.log('params', config.params)
  if (config.data) console.log('data', config.data)
  console.groupEnd()
}

/** Dev-only response logger. */
function logResponse(response: AxiosResponse): void {
  if (isProd) return
  const method = response.config.method?.toUpperCase() ?? 'GET'
  const url = response.config.url ?? ''
  console.groupCollapsed(`[HTTP] ← ${response.status} ${method} ${url}`)
  console.log('data', response.data)
  console.groupEnd()
}

// ─── Instance ─────────────────────────────────────────────────────────────────

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-accept-language': 'en',
  },
  withCredentials: false,
})

// ─── Request Interceptor ─────────────────────────────────────────────────────

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Attach Bearer token when present
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Request tracing header
    config.headers['x-request-id'] = generateRequestId()

    logRequest(config)
    return config
  },
  (error: AxiosError) => Promise.reject(error),
)

// ─── Response Interceptor ────────────────────────────────────────────────────

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    logResponse(response)
    return response
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryableConfig | undefined
    const status = getValueSafely(error, 'response.status') as number | undefined

    // 401 — token expired: attempt a silent refresh once
    if (status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = localStorage.getItem('refreshToken')

      if (refreshToken) {
        try {
          const { data } = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refreshToken,
          })

          const newAccessToken: string = data?.data?.accessToken ?? ''
          if (newAccessToken) {
            localStorage.setItem('accessToken', newAccessToken)
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
            return axiosInstance(originalRequest) // replay original request
          }
        } catch {
          // Refresh failed — clear tokens and let caller handle
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
        }
      }
    }

    // Forward with a normalised shape so handleHttpError can read it consistently
    return Promise.reject(error)
  },
)
