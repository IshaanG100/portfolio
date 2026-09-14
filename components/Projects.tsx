import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const compact = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-t border-border bg-surface px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="What I've built" title="Projects" />
        <Reveal>
          <p className="mt-5 max-w-reading text-lead text-muted">
            A mix of course work and things I built for myself. I usually start from a
            decision someone keeps making badly, often my own, then build the smallest
            thing that makes it better.
          </p>
        </Reveal>

        {/*
          Featured grid: 1 / 2 / 3 columns. With three cards it fills one row on desktop;
          a fourth card wraps into the grid cleanly with no layout change.
        */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {compact.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {compact.map((project, i) => (
              <CompactProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function CompactProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 80} className="h-full">
      <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5 shadow-card transition-colors hover:border-accent-weak">
        <h3 className="text-h3 font-semibold text-fg">{project.title}</h3>
        <p className="mt-1 text-xs text-muted">{project.context}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-surface-alt px-2.5 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  )
}
