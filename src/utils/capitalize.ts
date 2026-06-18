/** Capitalises the first letter of a string, lowercases the rest. */
export function capitalize(str: string): string {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/** Title-cases each word in a string. */
export function titleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase())
}
