'use client'

import { useState } from 'react'
import { Project } from '@/data/projects'
import Reveal from './Reveal'

interface Props {
  project: Project
  index: number
}

/**
 * Featured project card. Collapsed, it shows the title and the problem (the hook);
 * the decision and outcome expand on hover, keyboard focus, or tap. The full text
 * is always in the DOM, so nothing is hidden from crawlers or screen readers.
 */
export default function ProjectCard({ project, index }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Reveal delay={index * 80} className="h-full">
      <article
        className={`group flex h-full flex-col rounded-xl border bg-surface p-6 shadow-card transition-colors duration-300 ${
          open ? 'border-accent-weak' : 'border-border hover:border-accent-weak'
        }`}
      >
        <header>
          <h3 className="text-h3 font-semibold text-fg">{project.title}</h3>
          <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
          <p className="mt-1 text-xs text-muted">{project.context}</p>
        </header>

        <div className="mt-5">
          <Block label="Problem">{project.problem}</Block>
        </div>

        {/* Decision + outcome expand on hover / focus / tap */}
        <div
          className={`grid transition-rows duration-500 ease-out ${
            open
              ? 'grid-rows-expand'
              : 'grid-rows-collapse group-hover:grid-rows-expand group-focus-within:grid-rows-expand'
          }`}
        >
          <div className="overflow-hidden">
            <div className="space-y-4 pt-4">
              <Block label="What I decided" lead>
                {project.decision}
              </Block>
              <Block label="Outcome">{project.outcome}</Block>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1 self-start text-xs font-semibold uppercase tracking-wide text-accent-link"
        >
          {open ? 'Show less' : 'The decision'}
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              open ? 'rotate-180' : 'group-hover:rotate-180'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="mt-5 flex flex-1 flex-wrap content-end gap-2">
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
