import Section from './Section'

// Kept deliberately non-academic; degree, school, GPA and graduation live in Education.
const quickFacts = [
  { label: 'Focus', value: 'Product management' },
  { label: 'Based', value: 'Vancouver, BC' },
  { label: 'Open to', value: 'Internships & Full-time 2028' },
  { label: 'Interests', value: 'Startups, product design, data' },
]

export default function About() {
  return (
    <Section id="about" title="About" kicker="Who I am">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-16">
        <div className="max-w-measure space-y-5 font-serif text-body text-ink">
          <p>
            I&apos;m a Computer Science and Business (BUCS) student at{' '}
            <span className="font-semibold">UBC Sauder</span>. The combination is the point:
            I can read a P&amp;L and a pull request in the same afternoon, and{' '}
            <span className="font-semibold">product management</span> is where that
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
        </div>

        <dl className="ui grid content-start gap-4 text-meta sm:grid-cols-2 lg:grid-cols-1">
          {quickFacts.map(({ label, value }) => (
            <div key={label}>
              <dt className="text-muted">{label}</dt>
              <dd className="mt-0.5 font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
