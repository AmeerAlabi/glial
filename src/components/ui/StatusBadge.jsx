const STYLES = {
  active: { label: 'Active', className: 'bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/25', dot: 'bg-teal-600' },
  'coming-soon': { label: 'Coming soon', className: 'bg-surface text-ink-muted ring-1 ring-inset ring-line', dot: 'bg-ink-subtle' },
  upcoming: { label: 'Upcoming', className: 'bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/25', dot: 'bg-indigo-600' },
  past: { label: 'Past event', className: 'bg-surface text-ink-muted ring-1 ring-inset ring-line', dot: 'bg-ink-subtle' },
}

export default function StatusBadge({ status }) {
  const s = STYLES[status] ?? STYLES['coming-soon']
  return (
    <span className={`badge ${s.className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} aria-hidden="true" />
      {s.label}
    </span>
  )
}
