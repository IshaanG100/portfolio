'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'

// The logo links home, so no explicit Home item.
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-content px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="font-display text-lg font-medium tracking-tight text-fg">
            Ishaan<span className="text-accent-link">.</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent-link underline decoration-2 underline-offset-8'
                      : 'text-muted hover:text-fg'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/Ishaan_Gill_Resume.pdf"
              download
              className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-hover md:inline-flex"
            >
              Resume
            </a>
            <button
              type="button"
              className="text-muted transition-colors hover:text-fg md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-border bg-bg md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted transition-colors hover:text-fg"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
