import { usePageMeta } from '../lib/usePageMeta'
import site from '../content/site.json'
import PageHeader from '../components/ui/PageHeader'

export default function Privacy() {
  usePageMeta('Privacy notice', 'How The Glial Initiative collects and uses personal information submitted through this website.')

  return (
    <>
      <PageHeader eyebrow="Privacy" title="Privacy notice">
        How we handle the information you share with us through this website.
      </PageHeader>
      <section className="section">
        <div className="container-page">
          <div className="prose-glial">
            <h2>What we collect</h2>
            <p>
              We collect only what you give us through our forms: usually your name and email address, and sometimes
              your phone number, location, organisation or the languages you speak. When you download a resource, we
              ask for your email and, optionally, how you plan to use it.
            </p>
            <h2>How we use it</h2>
            <ul>
              <li>To reply to your message, application, RSVP or enquiry.</li>
              <li>To send you our newsletter, only if you have chosen to receive it.</li>
              <li>To understand, in aggregate, who uses our resources, so we can improve them.</li>
            </ul>
            <p>We do not sell or share your personal information with third parties for marketing.</p>
            <h2>Services we use</h2>
            <p>
              Form submissions are processed by Formspree and delivered to our team inbox. Our newsletter may be
              delivered through Substack. We use privacy-friendly Vercel Analytics, which does not use cookies, to
              count page visits. This site saves your accessibility settings, and whether you have unlocked resource
              downloads, in your browser&rsquo;s local storage. That information never leaves your device.
            </p>
            <h2>Your choices</h2>
            <p>
              You can unsubscribe from our newsletter at any time using the link in any email. To see, correct or delete
              the information we hold about you, email{' '}
              <a href={`mailto:${site.email}?subject=Privacy request`}>{site.email}</a>.
            </p>
            <p className="t-small">Last updated: October 2026.</p>
          </div>
        </div>
      </section>
    </>
  )
}
