import { AxiosError } from 'axios'

export interface ISagaApiResponse<T = unknown> {
  error: AxiosError | null
  result: T | null
}
