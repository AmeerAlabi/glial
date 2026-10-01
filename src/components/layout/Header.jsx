import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import AccessibilityMenu from './AccessibilityMenu'

const NAV_ITEMS = [
  { to: '/about', label: 'About' },
  { to: '/our-work', label: 'Our work' },
  { to: '/collaborations', label: 'Collaborations' },
  { to: '/outreach', label: 'Outreach' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/get-involved', label: 'Get involved' },
]

const linkClass = ({ isActive }) =>
  `relative flex h-full items-center text-[0.9875rem] font-semibold no-underline transition-colors ${
    isActive
      ? 'text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-teal-400'
      : 'text-ink-muted hover:text-ink'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu after navigating or pressing Escape
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" className="shrink-0" aria-label="The Glial Initiative, home">
          <img src="/brand/glial-lockup.svg" alt="" width="120" height="44" className="h-11 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden self-stretch xl:block">
          <ul className="flex h-full items-stretch gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <AccessibilityMenu />
          </div>
          <Link to="/donate" className="btn-primary btn-sm hidden sm:inline-flex">
            Donate
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded text-ink hover:bg-surface xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-white xl:hidden">
          <ul className="container-page py-3">
            {[{ to: '/', label: 'Home' }, ...NAV_ITEMS, { to: '/contact', label: 'Contact' }].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block border-b border-line py-3.5 text-lg font-semibold no-underline last:border-0 ${
                      isActive ? 'text-teal-600' : 'text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="container-page flex items-center justify-between gap-3 border-t border-line py-4">
            <AccessibilityMenu align="left" />
            <Link to="/donate" className="btn-primary">
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
