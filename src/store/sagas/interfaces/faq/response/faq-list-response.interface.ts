import { IBaseApiResponse } from '../../base-api-response.interface'
import { FaqItem } from '@/data/mock-data'

export interface IFaqListResponse extends IBaseApiResponse {
  data: FaqItem[]
}
