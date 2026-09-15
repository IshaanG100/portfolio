import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'
import Section from './Section'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const compact = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" title="Projects" kicker="What I've built">
      <p className="max-w-measure font-serif text-lead text-ink">
        A mix of course work and things I built for myself. I usually start from a decision
        someone keeps making badly, often my own, then build the smallest thing that makes
        it better.
      </p>

      <div className="mt-4 divide-y divide-rule border-b border-rule">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {compact.length > 0 && (
        <div className="grid gap-x-10 sm:grid-cols-2">
          {compact.map((project) => (
            <CompactProject key={project.title} project={project} />
          ))}
        </div>
      )}
    </Section>
  )
}

function CompactProject({ project }: { project: Project }) {
  return (
    <article className="py-8">
      <h3 className="font-serif text-lead font-medium text-ink">{project.title}</h3>
      <p className="ui mt-1 text-meta text-muted">{project.context}</p>
      <p className="mt-3 font-serif text-body text-ink">{project.summary}</p>
      <ul className="ui mt-3 flex flex-wrap gap-x-5 gap-y-1 text-meta text-muted">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}
