import { IBaseApiResponse } from '../../base-api-response.interface'

export interface ISignupResponse extends IBaseApiResponse {
  data: {
    user: {
      id: number
      name: string
      email: string
      role: string
      status: string
      created_at: string
      updated_at: string
    }
  }
}
