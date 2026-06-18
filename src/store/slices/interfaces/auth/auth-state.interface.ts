import { IToken } from './token.interface'
import { IUserDetails } from './user.interface'

export interface IAuthState {
  userDetails: IUserDetails | null
  token: IToken | null
  isAuthenticated: boolean
}
