import { all, call, put, takeLatest } from 'redux-saga/effects'
import httpClient from '../services/http.client'
import {
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
  GET_PROFILE,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
} from '../actions/auth.actions.types'
import { authSlice } from '../slices/auth.slice'
import { ActionPayload } from './interfaces/action-payload.interface'
import { ISagaApiResponse } from './interfaces/saga-api-response.interface'
import { IBaseApiResponse } from './interfaces/base-api-response.interface'
import {
  ILoginPayload,
  ISignupPayload,
  ILogoutPayload,
  IForgotPasswordPayload,
  IResetPasswordPayload,
  IChangePasswordPayload,
} from './interfaces/auth/payload'
import {
  ILoginResponse,
  ISignupResponse,
  IProfileResponse,
} from './interfaces/auth/response'
import { errorMessage, successMessage } from '@/components/helper/notification'

function* signIn(action: ActionPayload<ILoginPayload>) {
  const { data, callback } = action.payload ?? {}

  const { error, result }: ISagaApiResponse<ILoginResponse> = yield call(
    httpClient,
    {
      payload: { method: 'post', url: 'auth/signin', data },
      isLoader: true,
      authorization: false,
    },
  )

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
    errorMessage(error.message)
  } else {
    const user = result?.data?.user
    const token = result?.data?.token

    yield put(authSlice.actions.setAuthToken(token ?? null))
    yield put(authSlice.actions.loginAction(user!))

    if (token?.accessToken) localStorage.setItem('accessToken', token.accessToken)
    if (token?.refreshToken) localStorage.setItem('refreshToken', token.refreshToken)

    successMessage(result?.message ?? 'Signed in successfully')
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* signUp(action: ActionPayload<ISignupPayload>) {
  const { data, callback } = action.payload ?? {}

  const { error, result }: ISagaApiResponse<ISignupResponse> = yield call(
    httpClient,
    {
      payload: { method: 'post', url: 'auth/signup', data },
      isLoader: true,
      authorization: false,
    },
  )

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
  } else {
    successMessage(result?.message ?? 'Account created successfully')
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* getProfile(action: ActionPayload) {
  const { callback } = action.payload

  const { error, result }: ISagaApiResponse<IProfileResponse> = yield call(
    httpClient,
    {
      payload: { method: 'get', url: 'users/me' },
      isLoader: false,
      authorization: true,
    },
  )

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
  } else {
    yield put(authSlice.actions.loginAction(result?.data?.user!))
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* forgotPassword(action: ActionPayload<IForgotPasswordPayload>) {
  const { data, callback } = action.payload ?? {}

  const { error, result }: ISagaApiResponse<IBaseApiResponse> = yield call(
    httpClient,
    {
      payload: { method: 'post', url: 'auth/forgot-password', data },
      isLoader: true,
      authorization: false,
    },
  )

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
  } else {
    successMessage(result?.message ?? 'Reset link sent to your email')
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* resetPassword(action: ActionPayload<IResetPasswordPayload>) {
  const { data, callback } = action.payload ?? {}

  const { error, result }: ISagaApiResponse<IBaseApiResponse> = yield call(
    httpClient,
    {
      payload: { method: 'post', url: 'auth/reset-password', data },
      isLoader: true,
      authorization: false,
    },
  )

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
  } else {
    successMessage(result?.message ?? 'Password reset successfully')
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* changePassword(action: ActionPayload<IChangePasswordPayload>) {
  const { data, callback } = action.payload ?? {}

  const { error, result }: ISagaApiResponse<IBaseApiResponse> = yield call(
    httpClient,
    {
      payload: { method: 'patch', url: 'auth/change-password', data },
      isLoader: true,
      authorization: true,
    },
  )

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
  } else {
    successMessage(result?.message ?? 'Password changed successfully')
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* signOut(action: ActionPayload<ILogoutPayload>) {
  const { callback } = action.payload ?? {}

  // Clear tokens from localStorage regardless of API response
  const { error, result }: ISagaApiResponse<IBaseApiResponse> = yield call(
    httpClient,
    {
      payload: { method: 'post', url: 'auth/signout' },
      isLoader: true,
      authorization: true,
    },
  )

  yield put(authSlice.actions.logOutAction())
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')

  if (error) {
    callback?.({ success: false, data: null, message: error.message })
  } else {
    successMessage(result?.message ?? 'Signed out successfully')
    callback?.({ success: true, data: result, message: result?.message })
  }
}

function* authSaga() {
  yield all([
    takeLatest(SIGN_IN, signIn),
    takeLatest(SIGN_UP, signUp),
    takeLatest(SIGN_OUT, signOut),
    takeLatest(GET_PROFILE, getProfile),
    takeLatest(FORGOT_PASSWORD, forgotPassword),
    takeLatest(RESET_PASSWORD, resetPassword),
    takeLatest(CHANGE_PASSWORD, changePassword),
  ])
}

export default authSaga
