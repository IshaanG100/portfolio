import Image from 'next/image'

/**
 * Opening statement. The headline is the claim a recruiter should leave with;
 * the name lives in the navigation, which is always on screen.
 */
export default function Hero() {
  return (
    <section id="hero" className="px-6 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div>
            <h1 style={{ '--i': 0 } as React.CSSProperties} className="rise max-w-[22ch] font-serif text-display font-medium text-ink">
              Product-minded, between business and engineering
            </h1>
            <p style={{ '--i': 1 } as React.CSSProperties} className="rise mt-8 max-w-measure font-serif text-lead text-ink">
              I study Computer Science and Commerce at UBC Sauder, and I work best in the
              space between them, turning a business problem into something engineered and
              shipped. I&apos;m aiming for{' '}
              <span className="font-semibold">product management</span>: deciding what to
              build, what to leave out, and why.
            </p>
            <div style={{ '--i': 2 } as React.CSSProperties} className="rise ui mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="/Ishaan_Gill_Resume.pdf"
                download
                className="inline-flex min-h-11 items-center justify-center bg-ink px-6 py-2.5 font-medium text-paper transition-colors hover:bg-muted"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ishaansgill/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside style={{ '--i': 3 } as React.CSSProperties} className="rise flex gap-6 lg:flex-col lg:gap-7">
            <div className="relative aspect-[4/5] w-28 shrink-0 overflow-hidden sm:w-36 lg:w-full">
              <Image
                src="/photos/hero.jpeg"
                alt="Ishaan Singh Gill"
                fill
                sizes="(min-width: 1024px) 288px, (min-width: 640px) 144px, 112px"
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
            <dl className="ui grid content-start gap-4 text-meta">
              <div>
                <dt className="text-muted">Now</dt>
                <dd className="mt-0.5 font-medium text-ink">
                  Financial Intern @ Kensington Tours (Range Group)
                </dd>
              </div>
              <div>
                <dt className="text-muted">Open to</dt>
                <dd className="mt-0.5 font-medium text-ink">
                  PM internships &amp; full-time 2028
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
