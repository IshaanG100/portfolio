'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { photos, Photo } from '@/data/photos'

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i))
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <section id="photos" className="py-16 px-6 bg-[#0F172A]/50">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-[#F8FAFC] mb-12 flex items-center gap-6">
            Photos
            <span className="flex-1 h-px bg-gradient-to-r from-[#1E293B] to-transparent" />
          </h2>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {photos.map((photo, i) => (
              <PhotoCard
                key={i}
                photo={photo}
                index={i}
                onClick={() => setLightboxIndex(i)}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
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

function PhotoCard({
  photo,
  index,
  onClick,
  isInView,
}: {
  photo: Photo
  index: number
  onClick: () => void
  isInView: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="break-inside-avoid mb-5"
    >
      <button
        className="relative w-full overflow-hidden rounded-xl group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] border-2 border-[#1E293B] hover:border-[#3B82F6]/40 transition-all duration-300"
        onClick={onClick}
        aria-label={`View ${photo.alt}`}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={800}
          height={600}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {photo.caption && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/95 via-[#0A0F1E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
            <p className="text-[#F8FAFC] text-sm font-semibold text-left">{photo.caption}</p>
          </div>
        )}
      </button>
    </motion.div>
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-[#0A0F1E]/98 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 z-10 p-3 rounded-xl bg-[#1E293B]/50 hover:bg-[#3B82F6]/30 text-[#F8FAFC] border border-[#1E293B] hover:border-[#3B82F6] transition-all"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <span className="absolute top-8 left-6 z-10 text-[#94A3B8] text-sm font-medium tabular-nums">
        {index + 1} / {total}
      </span>

      {onPrev && (
        <button
          className="absolute left-6 z-10 p-4 rounded-xl bg-[#1E293B]/50 hover:bg-[#3B82F6]/30 text-[#F8FAFC] border border-[#1E293B] hover:border-[#3B82F6] transition-all"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Previous photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {onNext && (
        <button
          className="absolute right-6 z-10 p-4 rounded-xl bg-[#1E293B]/50 hover:bg-[#3B82F6]/30 text-[#F8FAFC] border border-[#1E293B] hover:border-[#3B82F6] transition-all"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Next photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        className="flex flex-col items-center px-20 sm:px-28 w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-5xl rounded-xl overflow-hidden border-2 border-[#1E293B]" style={{ height: '80vh' }}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        {photo.caption && (
          <p className="mt-6 text-[#94A3B8] text-base text-center font-medium">{photo.caption}</p>
        )}
      </div>
    </motion.div>
  )
}
