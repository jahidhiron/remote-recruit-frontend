import { createContext, ReactNode, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { AuthContextType } from './interfaces'
import { GET_PROFILE } from '@/store/actions/auth.actions.types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

/**
 * AuthProvider reads directly from Redux (rehydrated by PersistGate before render).
 * On mount, if persisted user details exist, verifies the session with the server
 * before allowing protected routes to render.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>()
  const userDetails = useSelector((state: RootState) => state?.auth?.userDetails)

  // Start as "checking" only when we have persisted user details to verify.
  // PersistGate guarantees this runs after rehydration, so userDetails is accurate.
  const [authChecking, setAuthChecking] = useState(() => !!userDetails)

  useEffect(() => {
    if (!userDetails) {
      setAuthChecking(false)
      return
    }

    // Verify the stored session is still valid (access token + refresh token).
    dispatch({
      type: GET_PROFILE,
      payload: { callback: () => setAuthChecking(false) },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value: AuthContextType = {
    isAuthenticated: !!userDetails,
    user: userDetails,
    loading: false,
    authChecking,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, type AuthContextType }
