import { Project } from '@/data/projects'
import Reveal from './Reveal'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-accent-weak">
        <header>
          <h3 className="text-h3 font-semibold text-fg">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          <p className="mt-1 text-xs text-muted">{project.context}</p>
        </header>

        <div className="mt-5 flex-1 space-y-4">
          <Block label="Problem">{project.problem}</Block>
          {/* The decision line carries the most weight on the card. */}
          <Block label="What I decided" lead>
            {project.decision}
          </Block>
          <Block label="Outcome">{project.outcome}</Block>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-link underline underline-offset-4"
          >
            View on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </article>
    </Reveal>
  )
}

function Block({
  label,
  lead,
  children,
}: {
  label: string
  lead?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <p
        className={`mb-1.5 text-eyebrow font-semibold uppercase ${
          lead ? 'text-accent-link' : 'text-muted'
        }`}
      >
        {label}
      </p>
      <p className={`text-sm leading-relaxed ${lead ? 'text-fg' : 'text-muted'}`}>{children}</p>
    </div>
  )
}
