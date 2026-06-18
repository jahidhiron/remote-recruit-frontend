import { createAction } from '@reduxjs/toolkit'

export const SIGN_IN = 'SIGN_IN'
export const signIn = createAction(SIGN_IN)

export const SIGN_UP = 'SIGN_UP'
export const signUp = createAction(SIGN_UP)

export const SIGN_OUT = 'SIGN_OUT'
export const signOut = createAction(SIGN_OUT)

export const GET_PROFILE = 'GET_PROFILE'
export const getProfile = createAction(GET_PROFILE)

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'
export const forgotPassword = createAction(FORGOT_PASSWORD)

export const RESET_PASSWORD = 'RESET_PASSWORD'
export const resetPassword = createAction(RESET_PASSWORD)

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const changePassword = createAction(CHANGE_PASSWORD)
