import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Kept deliberately non-academic — degree, school, GPA and graduation live in Education.
const quickFacts = [
  { label: 'Focus', value: 'Product management' },
  { label: 'Based', value: 'Vancouver, BC' },
  { label: 'Open to', value: 'Internships & Full-time 2028' },
  { label: 'Interests', value: 'Startups, product design, data' },
]

export default function About() {
  return (
    <section id="about" className="border-t border-border bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Who I am" title="About" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="max-w-reading space-y-5 text-lead text-muted">
            <p>
              I&apos;m a Computer Science and Business (BUCS) student at{' '}
              <span className="font-medium text-fg">UBC Sauder</span>. The combination is the
              point: I can read a P&amp;L and a pull request in the same afternoon, and{' '}
              <span className="font-medium text-fg">product management</span> is where that
              translation becomes the job: sitting between users, the business, and
              engineering, and making the call on what gets built and what gets cut.
            </p>
            <p>
              My projects are where I practice it; each one started from a decision someone
              kept making badly, including me. Before this I was a teaching assistant,
              bookkeeper, and data intern, and right now I&apos;m a financial intern on an
              enterprise ERP replacement. The throughline: understand the system, then
              improve it.
            </p>
          </Reveal>

          <Reveal>
            <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface shadow-card">
              {quickFacts.map(({ label, value }) => (
                <div key={label} className="flex gap-4 px-5 py-4">
                  <dt className="w-24 shrink-0 pt-0.5 text-eyebrow font-semibold uppercase text-muted">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-fg">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
