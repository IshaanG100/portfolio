'use client'

import { useEffect, useState } from 'react'

interface Props {
  /** Phrases to cycle through. Each is typed, held, then deleted; the first phrase is re-typed at the end and kept. */
  phrases: string[]
  className?: string
}

/**
 * Cycling typewriter: types phrase 1, deletes it, types phrase 2, deletes it, and so on,
 * then finishes by re-typing phrase 1 and keeping it with a blinking caret.
 * Under prefers-reduced-motion it shows phrase 1 immediately. The settled phrase is
 * always exposed to assistive tech via aria-label.
 */
export default function Typewriter({ phrases, className = '' }: Props) {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return
    const finalText = phrases[0]
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(finalText)
      setDone(true)
      return
    }

    // Sequence: every phrase typed + deleted, then the first phrase typed again and kept.
    const seq = [...phrases, finalText]
    const TYPE_MS = 50
    const DELETE_MS = 28
    const HOLD_MS = 1300
    let timer: ReturnType<typeof setTimeout>

    const type = (i: number, pos: number) => {
      setText(seq[i].slice(0, pos))
      if (pos < seq[i].length) {
        timer = setTimeout(() => type(i, pos + 1), TYPE_MS)
      } else if (i === seq.length - 1) {
        setDone(true)
      } else {
        timer = setTimeout(() => erase(i, pos), HOLD_MS)
      }
    }
    const erase = (i: number, pos: number) => {
      setText(seq[i].slice(0, pos))
      if (pos > 0) {
        timer = setTimeout(() => erase(i, pos - 1), DELETE_MS)
      } else {
        type(i + 1, 0)
      }
    }

    type(0, 0)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phrases.join('|')])

  return (
    <span className={className} aria-label={phrases[0]}>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className={`ml-0.5 inline-block h-3 w-0.5 -translate-y-px bg-accent-link align-middle ${
          done ? 'animate-caret' : ''
        }`}
      />
    </span>
  )
}
