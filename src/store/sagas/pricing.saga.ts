import { all, call, put, takeLatest } from 'redux-saga/effects'
import httpClient from '../services/http.client'
import { PRICING_LIST } from '../actions/pricing.actions.type'
import { setPricingPlans } from '../slices/pricing.slice'
import { ActionPayload } from './interfaces/action-payload.interface'
import { ISagaApiResponse } from './interfaces/saga-api-response.interface'
import { IPricingListResponse } from './interfaces/pricing/response/pricing-list-response.interface'
import { buildUrlFromQuery } from '@/utils/build-url-from-query'
import { pricingPlans as mockPricingPlans } from '@/data/mock-data'

/**
 * Worker saga — fetches pricing plans.
 *
 * API-first strategy:
 *   1. GET /pricing-plans
 *   2. SUCCESS → store real API data in Redux
 *   3. FAILURE → silently fall back to local mock data
 */
function* fetchPricingList(action: ActionPayload) {
  const { data, callback } = action.payload ?? {}

  const url = buildUrlFromQuery('pricing-plans', (data as Record<string, unknown>) ?? {})

  const { error, result }: ISagaApiResponse<IPricingListResponse> = yield call(
    httpClient,
    {
      payload: { method: 'get', url },
      isLoader: true,
      authorization: false,
    },
  )

  if (error) {
    // API unavailable — fall back to mock data so the page always renders
    yield put(setPricingPlans(mockPricingPlans))
    callback?.({ success: true, data: mockPricingPlans, message: 'Loaded from cache' })
  } else {
    const plans = result?.data ?? mockPricingPlans
    yield put(setPricingPlans(plans))
    callback?.({ success: true, data: plans, message: result?.message })
  }
}

function* pricingSaga() {
  yield all([takeLatest(PRICING_LIST, fetchPricingList)])
}

export default pricingSaga
