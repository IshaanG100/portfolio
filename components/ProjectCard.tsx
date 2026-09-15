import { Project } from '@/data/projects'
import Marker from './Marker'

/**
 * Featured project. Problem, decision and outcome are always visible; the
 * decision carries the highlighter because it is the part that matters.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="py-10">
      <header>
        <h3 className="font-serif text-h3 font-medium text-ink">{project.title}</h3>
        <p className="mt-1 font-serif text-body text-muted">{project.subtitle}</p>
        <p className="ui mt-2 text-meta text-muted">{project.context}</p>
      </header>

      <dl className="mt-6 grid max-w-measure gap-5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-8 sm:gap-y-6">
        <Row label="Problem">{project.problem}</Row>
        <Row label="What I decided">
          <Marker>{project.decision}</Marker>
        </Row>
        <Row label="Outcome">{project.outcome}</Row>
      </dl>

      <div className="ui mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-meta">
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-muted">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-rule decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
          >
            View on GitHub
          </a>
        )}
      </div>
    </article>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <dt className="ui text-meta text-muted sm:pt-1">{label}</dt>
      <dd className="font-serif text-body text-ink">{children}</dd>
    </>
  )
}
