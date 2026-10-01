import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { usePageMeta } from '../lib/usePageMeta'
import site from '../content/site.json'
import PageHeader from '../components/ui/PageHeader'
import Field from '../components/ui/Field'
import InterestForm from '../components/InterestForm'

export default function Contact() {
  usePageMeta('Contact us', 'Get in touch with The Glial Initiative about outreaches, partnerships, media or our resources.')

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch">
        Questions about our work, an outreach for your community, a partnership or a media request: we would love to
        hear from you.
      </PageHeader>

      <section className="section" aria-label="Contact">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="t-h4">Contact details</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                <div>
                  <p className="t-small">Email</p>
                  <a href={`mailto:${site.email}`} className="font-semibold">
                    {site.email}
                  </a>
                </div>
              </li>
              {site.phone && (
                <li className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                  <div>
                    <p className="t-small">Phone</p>
                    <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="font-semibold">
                      {site.phone}
                    </a>
                  </div>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
                <div>
                  <p className="t-small">Based in</p>
                  <p className="font-semibold text-ink">{site.location}</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 border-t border-line pt-6">
              <p className="t-small">
                Want to volunteer or translate? Use the forms on our <Link to="/get-involved">Get involved</Link> page so
                your application reaches the right team.
              </p>
            </div>
          </div>

          <div className="card p-6 md:p-8 lg:col-span-7 lg:col-start-6">
            <h2 className="t-h3 mb-6">Send us a message</h2>
            <InterestForm
              formName="Contact message"
              submitLabel="Send message"
              successTitle="Message sent"
              successText="Thank you for contacting us. We usually reply within a few working days."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
              </div>
              <Field label="Subject" name="topic" as="select" required defaultValue="">
                <option value="" disabled>
                  Choose a subject
                </option>
                <option>General question</option>
                <option>Outreach for my community</option>
                <option>Partnership or sponsorship</option>
                <option>Media enquiry</option>
                <option>Feedback on a resource or translation</option>
              </Field>
              <Field label="Message" name="message" as="textarea" rows={6} required />
              <p className="field-hint">
                We use your details only to reply to you. See our <Link to="/privacy">privacy notice</Link>.
              </p>
            </InterestForm>
          </div>
        </div>
      </section>
    </>
  )
}
