import { combineReducers } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { REDUX_PERSIST_KEY } from '@/services/config'
import app from './app.slice'
import auth from './auth.slice'
import faq from './faq.slice'
import pricing from './pricing.slice'

/** Combines all slice reducers into a single root reducer */
const reducers = combineReducers({
  app,
  auth,
  faq,
  pricing,
})

/** Redux Persist configuration — blacklist transient slices */
const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
  key: REDUX_PERSIST_KEY,
  version: 1,
  storage,
  blacklist: ['app'], // don't persist loading/refresh state
}

export const persistedReducer = persistReducer(persistConfig, reducers)

export type RootState = ReturnType<typeof reducers>
