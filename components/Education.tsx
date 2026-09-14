import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import CountUp from './CountUp'

const awards = [
  {
    name: 'Naomi Grigg Scholarship',
    description: 'Awarded for outstanding academic achievement and community leadership at UBC',
  },
  {
    name: 'Trek Excellence Scholarship',
    description: 'UBC merit scholarship recognizing exceptional academic performance',
  },
]

const stats = [
  { value: '4.33', label: 'Cumulative GPA' },
  { value: '4th', label: 'Year Student' },
  { value: "Dean's", label: 'Honour Roll' },
]

export default function Education() {
  return (
    <section id="education" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Academic record" title="Education" />

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-xl border border-border bg-surface shadow-card">
            <div className="flex flex-col gap-4 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-h3 font-semibold text-fg">University of British Columbia</h3>
                <p className="mt-1 text-sm font-medium text-fg">
                  Bachelor of Commerce, Computer Science &amp; Business (BUCS)
                </p>
                <p className="mt-1 text-sm text-muted">UBC Sauder School of Business</p>
              </div>
              <div className="shrink-0 text-sm text-muted lg:text-right">
                <p>Sep 2023 – May 2028</p>
                <p>Vancouver, BC</p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-border border-y border-border">
              {stats.map(({ value, label }) => (
                <div key={label} className="px-4 py-6 text-center">
                  <p className="font-display text-2xl font-medium text-fg">
                    {value === '4.33' ? <CountUp value={4.33} decimals={2} /> : value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-8">
              <h4 className="mb-4 text-eyebrow font-semibold uppercase text-muted">
                Scholarships &amp; Awards
              </h4>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div key={award.name} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-link" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-fg">{award.name}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
