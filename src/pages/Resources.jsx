import { Link } from 'react-router-dom'
import { ArrowRight, Languages } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import data from '../content/resources.json'
import PageHeader from '../components/ui/PageHeader'
import NewsletterSignup from '../components/NewsletterSignup'

export default function Resources() {
  usePageMeta('Resource hub', 'Free, multilingual infographics on traumatic brain injury and Shaken Baby Syndrome to download, print and share.')

  return (
    <>
      <PageHeader eyebrow="Resource hub" title="Free brain-health resources in African languages">
        Clear, accurate information on preventing and recognising brain injury, translated by our Language Corps
        volunteers. Free to download, print and share in your community.
      </PageHeader>

      <section className="section" aria-label="Topics">
        <div className="container-page">
          <ul className="grid gap-8 md:grid-cols-2">
            {data.topics.map((topic) => {
              const cover = topic.infographics[0]
              return (
                <li key={topic.slug}>
                  <Link to={`/resources/${topic.slug}`} className="card group flex h-full flex-col overflow-hidden text-ink no-underline hover:border-ink-subtle">
                    <div className="aspect-[4/3] overflow-hidden border-b border-line bg-surface">
                      <img src={cover?.file} alt="" loading="lazy" className="h-full w-full object-cover object-top" />
                    </div>
                    <div className="flex flex-1 flex-col p-6 md:p-8">
                      <p className="t-small flex items-center gap-2 font-semibold">
                        <Languages className="h-4 w-4 text-teal-600" aria-hidden="true" />
                        {topic.infographics.length} {topic.infographics.length === 1 ? 'language' : 'languages'}
                      </p>
                      <h2 className="t-h3 mt-2 group-hover:underline group-hover:underline-offset-4">{topic.title}</h2>
                      <p className="t-body mt-2 flex-1">{topic.summary}</p>
                      <span className="link-arrow mt-6">
                        View and download <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-16 rounded-lg border border-line bg-surface p-8 md:p-10">
            <NewsletterSignup />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="t-h3">Don&rsquo;t see your language?</h2>
              <p className="t-body mt-2 max-w-prose">
                Our materials have been translated into more than 20 African languages so far, and we are working
                towards 50+. Join the Language Corps to help translate the next one.
              </p>
            </div>
            <Link to="/get-involved#translate" className="btn-secondary">
              Become a translator
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
