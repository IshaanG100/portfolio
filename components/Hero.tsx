import Image from 'next/image'
import Reveal from './Reveal'
import Typewriter from './Typewriter'

export default function Hero() {
  return (
    <section id="hero" className="px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-content">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal immediate>
            <p className="text-eyebrow font-semibold uppercase text-accent-link">
              <Typewriter text="Product-minded, between business and engineering" />
            </p>
            <h1 className="mt-5 font-display text-display font-medium text-fg">
              Ishaan Singh Gill
            </h1>
            <p className="mt-6 max-w-reading text-lead text-muted">
              I study Computer Science and Commerce at UBC Sauder, and I work best in the
              space between them, turning a business problem into something engineered and
              shipped. I&apos;m aiming for{' '}
              <span className="font-semibold text-fg">product management</span>: deciding
              what to build, what to leave out, and why.
            </p>
            <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="font-medium text-fg">
                Financial Intern @ Kensington Tours (Range Group)
              </span>
              <span aria-hidden="true">·</span>
              <span>Open to PM internships &amp; full-time 2028</span>
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="/Ishaan_Gill_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ishaansgill/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium text-fg transition-colors hover:border-accent-link"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal immediate delay={120} className="flex justify-center lg:justify-end">
            {/* Photo left intact: same file, crop, fit and sizes. Only the glow/ring/colored shadow removed. */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border border-border">
              <Image
                src="/photos/hero.jpeg"
                alt="Ishaan Singh Gill"
                fill
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
