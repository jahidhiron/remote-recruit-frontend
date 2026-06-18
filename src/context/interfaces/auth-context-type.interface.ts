import { IUserDetails } from '@/store/slices/interfaces'

export interface AuthContextType {
  isAuthenticated: boolean
  user: IUserDetails | null
  loading: boolean
  authChecking: boolean
}
