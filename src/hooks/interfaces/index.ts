/* eslint-disable @typescript-eslint/no-explicit-any */

export interface UseListOptions<TFilter = Record<string, any>> {
  fetchFunction: (payload: any) => void
  initialPage?: number
  initialPageSize?: number
  initialSort?: string
  initialFilters?: Partial<TFilter>
}
