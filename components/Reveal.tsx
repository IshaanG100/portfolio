'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  /** ms delay applied to the transition, for light staggering */
  delay?: number
  /** reveal on mount (above-the-fold) instead of on scroll */
  immediate?: boolean
}

/**
 * Lightweight scroll reveal. Adds `.is-visible` when the element enters the viewport
 * (or immediately, for above-the-fold content). All the actual animation lives in CSS
 * and is disabled under prefers-reduced-motion.
 */
export default function Reveal({ children, className = '', delay = 0, immediate = false }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (immediate) {
      const raf = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(raf)
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
