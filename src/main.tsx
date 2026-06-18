import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/store'
import { AuthProvider } from '@/context'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* PersistGate delays render until persisted state is rehydrated */}
      <PersistGate loading={null} persistor={persistor}>
        {/* AuthProvider verifies any persisted session on mount via GET_PROFILE */}
        <AuthProvider>
          <App />
        </AuthProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
