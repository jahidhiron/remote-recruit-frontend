import { all, call, put, takeLatest } from 'redux-saga/effects'
import httpClient from '../services/http.client'
import { FAQ_LIST } from '../actions/faq.actions.type'
import { setFaqItems } from '../slices/faq.slice'
import { ActionPayload } from './interfaces/action-payload.interface'
import { ISagaApiResponse } from './interfaces/saga-api-response.interface'
import { IFaqListResponse } from './interfaces/faq/response/faq-list-response.interface'
import { buildUrlFromQuery } from '@/utils/build-url-from-query'
import { faqItems as mockFaqItems } from '@/data/mock-data'

/**
 * Worker saga — fetches FAQ items.
 *
 * API-first strategy:
 *   1. GET /faqs  (with optional query params)
 *   2. SUCCESS → store real API data in Redux
 *   3. FAILURE → silently fall back to local mock data
 *      (404 from the error handler is intentionally silent so the UI stays clean)
 */
function* fetchFaqList(action: ActionPayload<{ search?: string }>) {
  const { data, callback } = action.payload ?? {}

  const url = buildUrlFromQuery('faqs', data ?? {})

  const { error, result }: ISagaApiResponse<IFaqListResponse> = yield call(
    httpClient,
    {
      payload: { method: 'get', url },
      isLoader: true,
      authorization: false,
    },
  )

  if (error) {
    // API unavailable — fall back to mock data so the page always renders
    yield put(setFaqItems(mockFaqItems))
    callback?.({ success: true, data: mockFaqItems, message: 'Loaded from cache' })
  } else {
    const items = result?.data ?? mockFaqItems
    yield put(setFaqItems(items))
    callback?.({ success: true, data: items, message: result?.message })
  }
}

function* faqSaga() {
  yield all([takeLatest(FAQ_LIST, fetchFaqList)])
}

export default faqSaga
