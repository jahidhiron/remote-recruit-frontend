export type Callback = (response: {
  success: boolean
  data?: unknown
  message?: string
}) => void
