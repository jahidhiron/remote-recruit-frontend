import { all, call } from 'redux-saga/effects'
import AuthSaga from './auth.saga'
import FaqSaga from './faq.saga'
import PricingSaga from './pricing.saga'

/**
 * Root saga — initialises all domain sagas in parallel.
 * Add new sagas here as the project grows.
 */
export default function* rootSaga() {
  yield all([call(AuthSaga), call(FaqSaga), call(PricingSaga)])
}
