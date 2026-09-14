import Reveal from './Reveal'

interface Props {
  kicker: string
  title: string
}

export default function SectionHeading({ kicker, title }: Props) {
  return (
    <Reveal>
      <p className="text-eyebrow font-semibold uppercase tracking-wider text-accent-link">
        {kicker}
      </p>
      <h2 className="mt-2 font-display text-h2 font-medium text-fg">{title}</h2>
    </Reveal>
  )
}
