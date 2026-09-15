import Section from './Section'

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
    <Section id="education" title="Education" kicker="Academic record">
      <article className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-10">
        <div>
          <h3 className="font-serif text-lead font-medium text-ink">University of British Columbia</h3>
          <p className="mt-1 font-serif text-body text-ink">
            Bachelor of Commerce, Computer Science &amp; Business (BUCS)
          </p>
          <p className="ui mt-1 text-muted">UBC Sauder School of Business</p>
        </div>
        <div className="ui text-meta text-muted sm:text-right">
          <p>Sep 2023 – May 2028</p>
          <p className="mt-1">Vancouver, BC</p>
        </div>

        <ul className="ui flex flex-wrap gap-x-10 gap-y-3 border-y border-rule py-4 text-meta sm:col-span-2">
          {stats.map(({ value, label }) => (
            <li key={label} className="flex items-baseline gap-2">
              <span className="font-medium text-ink">{value}</span>
              <span className="text-muted">{label}</span>
            </li>
          ))}
        </ul>

        <div className="sm:col-span-2">
          <h4 className="ui text-muted">Scholarships &amp; Awards</h4>
          <ul className="mt-3 max-w-measure space-y-3 font-serif text-body">
            {awards.map((award) => (
              <li key={award.name}>
                <p className="font-medium text-ink">{award.name}</p>
                <p className="text-muted">{award.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  )
}
