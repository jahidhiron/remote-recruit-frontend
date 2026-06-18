import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FaqItem } from '@/data/mock-data'

interface FaqState {
  faqItems: FaqItem[]
  isLoaded: boolean
}

const initialState: FaqState = {
  faqItems: [],
  isLoaded: false,
}

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    /**
     * Stores FAQ items in state.
     * Called by the saga with either the API response or mock data as fallback.
     */
    setFaqItems(state, action: PayloadAction<FaqItem[]>) {
      state.faqItems = action.payload
      state.isLoaded = true
    },
  },
})

export const { setFaqItems } = faqSlice.actions
export default faqSlice.reducer
