/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useMemo } from 'react'
import debounce from 'lodash.debounce'
import { UseListOptions } from './interfaces'
import { useTypedSelector } from '@/store/typedSelector'

/**
 * Generic list management hook — pagination, sorting, debounced search, filters.
 *
 * @template TFilter - Shape of the filter object.
 * @param options.fetchFunction - Dispatched with the full query payload each time state changes.
 * @param options.initialPage - Starting page (default: 1).
 * @param options.initialPageSize - Items per page (default: 10).
 * @param options.initialSort - "column-order" string, e.g. "updated_at-desc" (default).
 * @param options.initialFilters - Seed filter values.
 * @param options.enabled - Skip auto-fetch on mount when false (default: true).
 */
export const useList = <TFilter = Record<string, any>,>({
  fetchFunction,
  initialPage = 1,
  initialPageSize = 10,
  initialSort = 'updated_at-desc',
  initialFilters = {},
  enabled = true,
}: UseListOptions<TFilter> & { enabled?: boolean }) => {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [pageSize, setPageSize] = useState(initialPageSize)
  const [sortOption, setSortOption] = useState(initialSort)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [filters, setFilters] = useState<Record<string, any>>(initialFilters)
  const [loading, setLoading] = useState(true)

  const { refresh } = useTypedSelector((state) => state.app)

  const debouncedSearch = useMemo(
    () => debounce((value: string) => setDebouncedQuery(value), 500),
    [],
  )

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    debouncedSearch(value)
  }

  useEffect(() => () => debouncedSearch.cancel(), [debouncedSearch])

  const buildPayload = useCallback(() => {
    const [column, order] = sortOption.split('-')
    return {
      page: currentPage,
      limit: pageSize,
      sortBy: [{ column, order }],
      q: debouncedQuery || undefined,
      ...filters,
    }
  }, [sortOption, currentPage, pageSize, debouncedQuery, filters])

  const fetchItems = useCallback(async () => {
    setLoading(true)
    try {
      await fetchFunction(buildPayload())
    } finally {
      setLoading(false)
    }
  }, [fetchFunction, buildPayload])

  // Re-fetch whenever the global refresh counter increments (e.g. after a mutation)
  useEffect(() => {
    fetchFunction(buildPayload())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])

  // Auto-fetch on mount and whenever query params change
  useEffect(() => {
    if (enabled) fetchItems()
  }, [fetchItems, enabled])

  const refetch = useCallback(
    (extraPayload: Partial<any> = {}) => {
      if (extraPayload.page) setCurrentPage(extraPayload.page)
      if (extraPayload.limit) setPageSize(extraPayload.limit)
      if (extraPayload.sortBy) setSortOption(extraPayload.sortBy)
      if (extraPayload.filters) setFilters((prev) => ({ ...prev, ...extraPayload.filters }))
      fetchItems()
    },
    [fetchItems],
  )

  return {
    loading,
    pageSize,
    sortOption,
    searchQuery,
    filters,
    currentPage,
    setCurrentPage,
    setPageSize,
    setSortOption,
    setFilters,
    handleSearch,
    fetchItems,
    refetch,
  }
}
