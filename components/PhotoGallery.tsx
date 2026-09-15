'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { photos, Photo } from '@/data/photos'
import Section from './Section'

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i))
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  return (
    <Section id="photos" title="Photos" kicker="Outside work">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 lg:grid-cols-3">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <PhotoThumb photo={photo} onClick={() => setLightboxIndex(i)} />
          </li>
        ))}
      </ul>

      {lightboxIndex !== null && (
        <Lightbox
          photo={photos[lightboxIndex]}
          index={lightboxIndex}
          total={photos.length}
          onClose={() => setLightboxIndex(null)}
          onPrev={lightboxIndex > 0 ? () => setLightboxIndex((i) => (i ?? 1) - 1) : undefined}
          onNext={
            lightboxIndex < photos.length - 1
              ? () => setLightboxIndex((i) => (i ?? -1) + 1)
              : undefined
          }
        />
      )}
    </Section>
  )
}

function PhotoThumb({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <button type="button" className="group block w-full text-left" onClick={onClick} aria-label={`View ${photo.alt}`}>
      <span className="relative block aspect-[4/3] w-full overflow-hidden bg-rule">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 50vw"
        />
      </span>
      {photo.caption && (
        <span className="ui mt-2 block text-meta text-muted transition-colors group-hover:text-ink">
          {photo.caption}
        </span>
      )}
    </button>
  )
}

function Lightbox({
  photo,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  photo: Photo
  index: number
  total: number
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}) {
  return (
    <div
      className="ui fixed inset-0 z-[200] flex items-center justify-center bg-ink/95 text-paper"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption || photo.alt}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <span className="absolute left-5 top-5 z-10 text-meta tabular-nums text-paper/70">
        {index + 1} of {total}
      </span>

      {onPrev && (
        <button
          type="button"
          className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:left-4"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous photo"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {onNext && (
        <button
          type="button"
          className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center text-paper/80 transition-colors hover:text-paper sm:right-4"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next photo"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div className="flex w-full flex-col items-center px-14 sm:px-24" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full max-w-5xl" style={{ height: '78vh' }}>
          <Image src={photo.src} alt={photo.alt} fill className="object-contain" sizes="100vw" priority />
        </div>
        {photo.caption && <p className="mt-4 text-center text-meta text-paper/80">{photo.caption}</p>}
      </div>
    </div>
  )
}
