'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { photos, Photo } from '@/data/photos'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

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
    <section id="photos" className="border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-content">
        <SectionHeading kicker="Outside work" title="Photos" />

        <div className="mt-12 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="break-inside-avoid">
              <PhotoCard photo={photo} onClick={() => setLightboxIndex(i)} />
            </Reveal>
          ))}
        </div>
      </div>

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
    </section>
  )
}

function PhotoCard({ photo, onClick }: { photo: Photo; onClick: () => void }) {
  return (
    <button
      className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border transition-colors hover:border-accent-weak focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-link"
      onClick={onClick}
      aria-label={`View ${photo.alt}`}
    >
      <span className="relative block">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={800}
          height={600}
          className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {photo.caption && (
          <span className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-left text-sm font-medium text-white">{photo.caption}</span>
          </span>
        )}
      </span>
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute right-5 top-5 z-10 rounded-lg border border-white/20 p-2.5 text-white transition-colors hover:border-white/60"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <span className="absolute left-5 top-6 z-10 text-sm font-medium tabular-nums text-white/70">
        {index + 1} / {total}
      </span>

      {onPrev && (
        <button
          className="absolute left-4 z-10 rounded-lg border border-white/20 p-3 text-white transition-colors hover:border-white/60"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous photo"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {onNext && (
        <button
          className="absolute right-4 z-10 rounded-lg border border-white/20 p-3 text-white transition-colors hover:border-white/60"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next photo"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div className="flex w-full flex-col items-center px-16 sm:px-24" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full max-w-5xl overflow-hidden rounded-xl" style={{ height: '80vh' }}>
          <Image src={photo.src} alt={photo.alt} fill className="object-contain" sizes="100vw" priority />
        </div>
        {photo.caption && <p className="mt-5 text-center text-sm font-medium text-white/80">{photo.caption}</p>}
      </div>
    </div>
  )
}
