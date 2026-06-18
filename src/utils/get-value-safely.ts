/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Safely reads a deeply nested value using dot-notation path.
 * Returns defaultValue (undefined by default) on any access error.
 *
 * @example
 * getValueSafely(error, 'response.data.message')
 */
export function getValueSafely(
  obj: any,
  path: string,
  defaultValue: any = undefined,
): any {
  try {
    return path.split('.').reduce((acc, part) => acc?.[part], obj) ?? defaultValue
  } catch {
    return defaultValue
  }
}
