// Dates in content files are ISO strings ("2025-03-21" or "2025-03-21T11:00").
// `precision` ("day" | "month" | "year") controls how much of the date is shown,
// so an entry can be listed when only the month or year is known.

export function parseDate(value) {
  if (!value) return null
  const d = new Date(value.length === 10 ? `${value}T00:00` : value)
  return Number.isNaN(d.getTime()) ? null : d
}

export function formatDate(value, precision = 'day') {
  const d = parseDate(value)
  if (!d) return ''
  const options =
    precision === 'year'
      ? { year: 'numeric' }
      : precision === 'month'
        ? { month: 'long', year: 'numeric' }
        : { day: 'numeric', month: 'long', year: 'numeric' }
  return d.toLocaleDateString('en-GB', options)
}

export function formatTimeRange(start, end, timezone) {
  const hasTime = (v) => v && v.includes('T')
  if (!hasTime(start)) return ''
  const fmt = (v) => parseDate(v).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const range = hasTime(end) ? `${fmt(start)}–${fmt(end)}` : fmt(start)
  return timezone ? `${range} ${timezone}` : range
}

/**
 * An event is upcoming until it ends: the end of its last day, or the end of
 * the month/year when only that much of the date is known.
 */
export function isUpcoming(event, now = new Date()) {
  const raw = event.end || event.start
  const last = parseDate(raw)
  if (!last) return false
  const end = new Date(last)
  if (event.datePrecision === 'year') end.setMonth(11, 31)
  else if (event.datePrecision === 'month') end.setMonth(end.getMonth() + 1, 0)
  if (!raw.includes('T') || event.datePrecision !== 'day') end.setHours(23, 59, 59, 999)
  return end >= now
}

export const byDateDesc = (key) => (a, b) => (parseDate(b[key]) ?? 0) - (parseDate(a[key]) ?? 0)
export const byDateAsc = (key) => (a, b) => (parseDate(a[key]) ?? 0) - (parseDate(b[key]) ?? 0)
