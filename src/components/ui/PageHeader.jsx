/** Standard page intro: eyebrow, title and lead paragraph on a light band. */
export default function PageHeader({ eyebrow, title, children, aside }) {
  return (
    <header className="border-b border-line bg-surface">
      <div className="container-page grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          {eyebrow && <p className="t-eyebrow mb-4">{eyebrow}</p>}
          <h1 className="t-h1">{title}</h1>
          {children && <div className="t-lead mt-5 max-w-prose">{children}</div>}
        </div>
        {aside && <div className="lg:col-span-4">{aside}</div>}
      </div>
    </header>
  )
}
