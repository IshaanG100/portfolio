'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * The highlighter. Wraps a decision so it reads as the line someone marked
 * while reading the memo. Rendered as <mark> so assistive tech knows it is
 * emphasised. The band wipes across once when it scrolls into view; under
 * prefers-reduced-motion it is simply drawn.
 */
export default function Marker({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <mark ref={ref} className={`marker ${on ? 'is-on' : ''}`}>
      {children}
    </mark>
  )
}
