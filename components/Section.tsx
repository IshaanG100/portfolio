interface Props {
  id: string
  title: string
  /** Short muted line under the title in the rail. */
  kicker?: string
  children: React.ReactNode
}

/**
 * Section shell: the title sits in a left rail and sticks while the content
 * scrolls on desktop, so a skimmer always knows where they are. On narrower
 * screens the rail collapses to a normal heading above the content.
 */
export default function Section({ id, title, kicker, children }: Props) {
  return (
    <section id={id} className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-page lg:grid lg:grid-cols-[theme(spacing.rail)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-serif text-h2 font-medium text-ink">{title}</h2>
          {kicker && <p className="ui mt-1.5 text-muted">{kicker}</p>}
        </div>
        <div className="mt-8 lg:mt-3">{children}</div>
      </div>
    </section>
  )
}
