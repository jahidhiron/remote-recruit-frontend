export interface FieldError {
  field?: string
  message?: string
}

export interface ServerErrorResponse {
  success?: boolean
  statusCode?: number
  status?: string
  path?: string
  message?: string
  timestamp?: string
  errors?: FieldError[]
  stack?: string
}
