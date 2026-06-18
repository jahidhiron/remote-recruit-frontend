/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosResponse } from 'axios'
import { call, delay, put } from 'redux-saga/effects'
import { appSlice } from '../slices/app.slice'
import { HttpClientParams, IApiSuccessResponse, SagaGenerator } from './interfaces'
import { axiosInstance } from '@/utils/axios.instance'
import { handleHttpError } from './utils/http-error'

/**
 * Generic HTTP client saga.
 *
 * All worker sagas funnel through here. Responsibilities:
 *   1. Toggle global loading indicator
 *   2. Execute the HTTP request via the shared Axios instance
 *   3. On failure: run the centralised error handler (shows toast, handles 401, etc.)
 *   4. Return { error, result } — worker sagas decide whether to fall back to mock data
 *
 * @example
 * const { error, result } = yield call(httpClient, { payload: { method: 'get', url: 'faqs' } })
 * if (error) { yield put(setItems(mockItems)) } else { yield put(setItems(result.data)) }
 */
function* httpClient({
  payload,
  isLoader = true,
  headers = {},
}: HttpClientParams): SagaGenerator {
  if (isLoader) {
    yield put(appSlice.actions.setLoading(true))
    yield delay(200) // brief pause so the skeleton isn't a jarring flash
  }

  const requestConfig = { ...payload, headers }

  try {
    const { data }: AxiosResponse<IApiSuccessResponse> = yield call(
      axiosInstance.request,
      requestConfig,
    )
    yield put(appSlice.actions.setLoading(false))
    return { error: null, result: data }
  } catch (err: unknown) {
    const error = err as AxiosError

    yield put(appSlice.actions.setLoading(false))

    // Run centralised handler — shows toast, handles 401 token refresh logic, etc.
    // For 404 (endpoint not found) the handler is silent; callers fall back to mock data.
    const { retry } = handleHttpError(error)

    // Retry once if the handler determined the token was refreshed
    if (retry) {
      try {
        const { data }: AxiosResponse<IApiSuccessResponse> = yield call(
          axiosInstance.request,
          requestConfig,
        )
        return { error: null, result: data }
      } catch (retryErr: unknown) {
        return { error: retryErr as AxiosError, result: null }
      }
    }

    return { error, result: null }
  }
}

export default httpClient
