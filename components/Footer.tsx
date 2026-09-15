export default function Footer() {
  return (
    <footer className="ui px-6 pb-10 pt-4 text-meta text-muted">
      <div className="mx-auto flex max-w-page flex-wrap gap-x-6 gap-y-1 border-t border-rule pt-6">
        <p>© {new Date().getFullYear()} Ishaan Singh Gill</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
