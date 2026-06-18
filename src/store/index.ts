import { configureStore, Middleware } from '@reduxjs/toolkit'
import { Persistor, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { persistedReducer } from './slices'
import { isProd } from '@/services/config'

/** Create Redux-Saga middleware */
const sagaMiddleware = createSagaMiddleware()

const middlewares: Middleware[] = [sagaMiddleware]

const configureMainStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // required for redux-persist
      }).concat(...middlewares),
    devTools: !isProd,
  })

  /** Start the root saga */
  sagaMiddleware.run(rootSaga)

  /** Create persistor */
  const persistor: Persistor = persistStore(store)

  return { store, persistor }
}

const { store, persistor } = configureMainStore()

export { store, persistor }

/** Type aliases used throughout the app */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
