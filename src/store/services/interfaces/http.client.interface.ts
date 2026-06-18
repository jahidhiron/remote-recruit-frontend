/* eslint-disable @typescript-eslint/no-explicit-any */
interface Payload {
  method: string
  url: string
  data?: any
  params?: any
}

export interface HttpClientParams {
  payload: Payload
  isLoader?: boolean
  authorization?: boolean
  headers?: Record<string, string>
}

export type SagaGenerator = Generator<any, any, any>

export interface IApiSuccessResponse<T = unknown> {
  success: boolean
  statusCode: number
  message: string
  data: T
}

export interface IApiErrorResponse {
  success: false
  statusCode: number
  message: string
}
