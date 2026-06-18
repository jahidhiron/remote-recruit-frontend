import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  loading: boolean
  refresh: number
}

const initialState: AppState = {
  loading: false,
  refresh: 0,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    triggerRefresh(state) {
      state.refresh += 1
    },
  },
})

export default appSlice.reducer
