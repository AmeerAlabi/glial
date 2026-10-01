import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import site from '../../content/site.json'
import NewsletterSignup from '../NewsletterSignup'

const COLUMNS = [
  {
    title: 'Organisation',
    links: [
      { to: '/about', label: 'About us' },
      { to: '/about#leadership', label: 'Leadership' },
      { to: '/our-work', label: 'Our work' },
      { to: '/collaborations', label: 'Collaborations' },
    ],
  },
  {
    title: 'Take part',
    links: [
      { to: '/get-involved#volunteer', label: 'Volunteer' },
      { to: '/get-involved#translate', label: 'Become a translator' },
      { to: '/get-involved#partner', label: 'Partner with us' },
      { to: '/donate', label: 'Donate' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { to: '/resources', label: 'Resource hub' },
      { to: '/outreach', label: 'Advocacy & outreach' },
      { to: '/events', label: 'Events' },
      { to: '/contact', label: 'Contact' },
    ],
  },
]

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const SOCIAL = [
  { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
  { href: site.social.x, label: 'X (Twitter)', Icon: XIcon },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
].filter((s) => s.href)

export default function Footer() {
  return (
    <footer className="on-dark bg-navy text-white">
      <div className="border-b border-white/10">
        <div className="container-page py-12 md:py-14">
          <NewsletterSignup tone="dark" />
        </div>
      </div>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src="/brand/glial-lockup-white.svg" alt="The Glial Initiative" width="131" height="48" className="h-12 w-auto" />
          <p className="mt-5 max-w-xs text-white/75">{site.tagline}</p>
          <ul className="mt-6 space-y-2.5 text-[0.9375rem] text-white/75">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="text-white/90 no-underline hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            {site.phone && (
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`} className="text-white/90 no-underline hover:text-white hover:underline">
                  {site.phone}
                </a>
              </li>
            )}
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {site.location}
            </li>
          </ul>
        </div>

        <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-teal-400">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-white/85 no-underline hover:text-white hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-white/65 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. A youth-led non-governmental organisation.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-white/65 no-underline hover:text-white hover:underline">
              Privacy
            </Link>
            <ul className="flex items-center gap-1">
              {SOCIAL.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded text-white/75 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
