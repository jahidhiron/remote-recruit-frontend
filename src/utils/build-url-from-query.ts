/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Builds a URL with serialised query parameters.
 * Skips null/undefined values and JSON-stringifies objects.
 *
 * @example
 * buildUrlFromQuery('faqs', { page: 1, search: 'remote' })
 * // → 'faqs?page=1&search=remote'
 */
export function buildUrlFromQuery(
  baseUrl: string,
  params: Record<string, any> = {},
): string {
  const query = Object.entries(params)
    .flatMap(([key, value]) => {
      if (value === null || value === undefined || value === '') return []

      const stringValue =
        typeof value === 'object' ? JSON.stringify(value) : String(value)

      return [`${encodeURIComponent(key)}=${encodeURIComponent(stringValue)}`]
    })
    .join('&')

  return query ? `${baseUrl}?${query}` : baseUrl
}
