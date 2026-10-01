import { Link } from 'react-router-dom'
import { usePageMeta } from '../lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <section className="section">
      <div className="container-page max-w-prose">
        <p className="t-eyebrow mb-3">Error 404</p>
        <h1 className="t-h1">We can&rsquo;t find that page</h1>
        <p className="t-lead mt-5">It may have moved when we updated our website. Try one of these instead.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">
            Go to the homepage
          </Link>
          <Link to="/resources" className="btn-secondary">
            Browse resources
          </Link>
        </div>
      </div>
    </section>
  )
}
