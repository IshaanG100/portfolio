import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Say hello" title="Get in touch" />
        <Reveal>
          <p className="mt-5 max-w-reading text-lead text-muted">
            If you&apos;re hiring for product, building something, or just want to talk, my
            inbox is open.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:Ishaansgill@icloud.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-paper transition-colors hover:bg-accent-hover"
            >
              <EmailIcon />
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/ishaansgill/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-fg transition-colors hover:border-accent-link"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} Ishaan Singh Gill · Built with Next.js and Tailwind CSS
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
