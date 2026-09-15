import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Get in touch" kicker="Say hello">
      <p className="max-w-measure font-serif text-h3 font-medium text-ink">
        If you&apos;re hiring for product, building something, or just want to talk, my inbox
        is open.
      </p>
      <ul className="ui mt-8 flex flex-wrap gap-x-8 gap-y-3 text-body">
        <li>
          <a
            href="mailto:Ishaansgill@icloud.com"
            className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
          >
            Email me
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ishaansgill/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-rule decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </Section>
  )
}
