/** Heading block used at the top of page sections. */
export default function SectionHeader({ eyebrow, title, children, action, id, className = '' }) {
  return (
    <div className={`mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-prose">
        {eyebrow && <p className="t-eyebrow mb-3">{eyebrow}</p>}
        <h2 id={id} className="t-h2">
          {title}
        </h2>
        {children && <div className="t-body mt-4">{children}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
