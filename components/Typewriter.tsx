'use client'

import { useEffect, useState } from 'react'

interface Props {
  text: string
  className?: string
}

/**
 * Types `text` out one character at a time with a blinking caret. Falls back to
 * the full text immediately under prefers-reduced-motion. The full string is always
 * exposed to assistive tech via aria-label.
 */
export default function Typewriter({ text, className = '' }: Props) {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length)
      setDone(true)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setCount(i)
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 55)
    return () => clearInterval(id)
  }, [text])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-3 w-0.5 -translate-y-px bg-accent-link align-middle ${
          done ? 'animate-caret' : ''
        }`}
      />
    </span>
  )
}
