import { Toaster } from 'react-hot-toast'

/**
 * Mount once at the app root (inside App.tsx).
 * All successMessage / errorMessage calls will render here.
 */
export const NotificationProvider = () => (
  <Toaster
    position="bottom-right"
    containerStyle={{ zIndex: 999999 }}
    toastOptions={{ duration: 4000 }}
  />
)
