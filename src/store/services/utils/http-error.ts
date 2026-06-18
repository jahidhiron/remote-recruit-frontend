/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios'
import { errorMessage } from '@/components/helper/notification'
import { getValueSafely } from '@/utils/get-value-safely'
import { ServerErrorResponse, FieldError } from './interfaces/server-error-response.interface'

/**
 * Extracts the most useful human-readable message from a server error response.
 * Priority: field-level validation errors → response.message → axios message → fallback.
 */
function extractErrorMessage(
  data?: ServerErrorResponse,
  axiosMessage?: string,
  fallback = 'Something went wrong',
): string {
  if (Array.isArray(data?.errors) && data.errors.length > 0) {
    const msgs = (data.errors as FieldError[])
      .map((e) => e?.message?.trim())
      .filter(Boolean)
      .map((m) => m!.charAt(0).toUpperCase() + m!.slice(1))

    if (msgs.length) return msgs.join('\n')
  }

  if (typeof data?.message === 'string' && data.message.trim()) return data.message.trim()
  if (axiosMessage?.trim()) return axiosMessage.trim()
  return fallback
}

export interface HttpErrorResult {
  /** When true the caller should replay the original request (e.g. after token refresh). */
  retry: boolean
}

/**
 * Centralised HTTP error handler for use inside worker sagas.
 *
 * Handles the most common HTTP status codes and shows an appropriate
 * toast notification. Returns { retry: boolean } so the httpClient can
 * decide whether to replay the failed request.
 */
export function handleHttpError(
  error: AxiosError | any,
): HttpErrorResult {
  const status: number =
    getValueSafely(error, 'status') ||
    getValueSafely(error, 'response.status') ||
    0

  const axiosMessage: string =
    getValueSafely(error, 'message') || ''

  const data: ServerErrorResponse | undefined =
    getValueSafely(error, 'response.data') ||
    getValueSafely(error, 'original.response.data')

  const message = extractErrorMessage(data, axiosMessage)

  switch (status) {
    case 400:
      errorMessage(message || 'Invalid request. Please check your input.')
      break

    case 401:
      // Token expired or missing — callers decide whether to redirect
      errorMessage('Your session has expired. Please sign in again.')
      break

    case 403:
      errorMessage(data?.message || 'You do not have permission to perform this action.')
      break

    case 404:
      // Silently handled — callers fall back to mock data
      break

    case 422:
      errorMessage(message || 'Unprocessable request.')
      break

    case 429:
      errorMessage('Too many requests. Please slow down and try again.')
      break

    case 500:
    case 502:
    case 503:
      errorMessage(data?.message || 'A server error occurred. Please try again later.')
      break

    default:
      if (status === 0 || !status) {
        // Network / CORS / timeout — silently handled while API is unavailable
        break
      }
      errorMessage(message || 'An unexpected error occurred.')
  }

  return { retry: false }
}
