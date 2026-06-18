import { IBaseApiResponse } from '../../base-api-response.interface'

export interface IProfileResponse extends IBaseApiResponse {
  data: {
    user: {
      id: number
      name: string
      email: string
      avatar?: string
      role: string
      status: string
      created_at: string
      updated_at: string
    }
  }
}
