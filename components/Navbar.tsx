'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

// The name links home, so no explicit Home item.
const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#photos', label: 'Photos' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Hairline under the bar once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The section crossing a band near the top of the viewport is the active one.
  useEffect(() => {
    const ids = ['hero', ...navLinks.map((l) => l.href.substring(1))]
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Close the sheet on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <nav
      aria-label="Site"
      className={`ui fixed inset-x-0 top-0 z-50 bg-paper transition-[border-color] duration-300 ${
        scrolled || menuOpen ? 'border-b border-rule' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-page px-6">
        <div className="flex h-16 items-center justify-between gap-6">
          <a href="#hero" className="shrink-0 font-semibold text-ink">
            Ishaan Singh Gill
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`inline-flex min-h-11 items-center underline-offset-[7px] transition-colors ${
                      isActive
                        ? 'text-ink underline decoration-ink decoration-1'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/Ishaan_Gill_Resume.pdf"
              download
              className="hidden min-h-10 items-center bg-ink px-4 font-medium text-paper transition-colors hover:bg-muted md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-ink md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-rule bg-paper md:hidden">
          <ul className="mx-auto max-w-page px-6 py-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`flex min-h-11 items-center text-body transition-colors ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="mt-3 border-t border-rule pt-4">
              <a
                href="/Ishaan_Gill_Resume.pdf"
                download
                className="inline-flex min-h-11 items-center bg-ink px-5 font-medium text-paper transition-colors hover:bg-muted"
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
