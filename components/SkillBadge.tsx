interface Props {
  name: string
}

export default function SkillBadge({ name }: Props) {
  return (
    <span className="rounded-md border border-border bg-surface-alt px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent-weak hover:text-fg">
      {name}
    </span>
  )
}
