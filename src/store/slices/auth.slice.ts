import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState } from './interfaces/auth/auth-state.interface'
import { IToken } from './interfaces/auth/token.interface'
import { IUserDetails } from './interfaces/auth/user.interface'

const initialState: IAuthState = {
  userDetails: null,
  token: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(state, { payload }: PayloadAction<IToken | null>) {
      state.token = payload
    },

    loginAction(state, { payload }: PayloadAction<IUserDetails>) {
      state.userDetails = payload
      state.isAuthenticated = true
    },

    logOutAction(state) {
      state.userDetails = null
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { setAuthToken, loginAction, logOutAction } = authSlice.actions

export default authSlice.reducer
