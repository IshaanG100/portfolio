/**
 * The highlighter. Wraps a decision so it reads as the line someone marked
 * while reading the memo. Rendered as <mark> so assistive tech knows it is
 * emphasised; the band itself is drawn in globals.css.
 */
export default function Marker({ children }: { children: React.ReactNode }) {
  return <mark className="marker">{children}</mark>
}
