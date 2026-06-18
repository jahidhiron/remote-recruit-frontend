import { IBaseApiResponse } from '../../base-api-response.interface'
import { PricingPlan } from '@/data/mock-data'

export interface IPricingListResponse extends IBaseApiResponse {
  data: PricingPlan[]
}
