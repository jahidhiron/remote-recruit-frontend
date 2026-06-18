const pad = (n: number, digits = 2) => n.toString().padStart(digits, '0')

/**
 * Formats a Date to "YYYY-MM-DD HH:mm:ss" (local time).
 */
export function formatFullDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''

  return (
    `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
  )
}

/**
 * Returns a human-friendly relative label: "just now", "3m ago", "2h ago", "yesterday", etc.
 */
export function formatRelativeTime(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''

  const diffMs = Date.now() - d.getTime()
  const diffSec = Math.floor(diffMs / 1_000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHrs = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHrs / 24)

  if (diffSec < 60) return 'just now'
  if (diffMin < 60) return `${diffMin}m ago`
  if (diffHrs < 24) return `${diffHrs}h ago`
  if (diffDays === 1) return 'yesterday'
  if (diffDays < 7) return `${diffDays}d ago`

  return formatFullDate(d).slice(0, 10) // fallback to date string
}

/**
 * Formats a Date to a short display string: "Jun 18, 2026".
 */
export function formatShortDate(date: Date | string | null | undefined): string {
  if (!date) return ''
  const d = typeof date === 'string' ? new Date(date) : date
  if (isNaN(d.getTime())) return ''

  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
