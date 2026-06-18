import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PricingPlan } from '@/data/mock-data'

interface PricingState {
  pricingPlans: PricingPlan[]
  isLoaded: boolean
}

const initialState: PricingState = {
  pricingPlans: [],
  isLoaded: false,
}

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    /**
     * Stores pricing plans in state.
     * Called by the saga with either the API response or mock data as fallback.
     */
    setPricingPlans(state, action: PayloadAction<PricingPlan[]>) {
      state.pricingPlans = action.payload
      state.isLoaded = true
    },
  },
})

export const { setPricingPlans } = pricingSlice.actions
export default pricingSlice.reducer
