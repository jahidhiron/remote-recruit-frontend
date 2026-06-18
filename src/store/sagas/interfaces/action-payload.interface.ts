import { Callback } from '../types'

/**
 * Generic type for all saga action payloads.
 * Worker sagas destructure { data, callback } from action.payload.
 */
export interface ActionPayload<T = unknown> {
  type: string
  payload: {
    data?: T
    callback?: Callback
  }
}
