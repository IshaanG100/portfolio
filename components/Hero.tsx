'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const subtitles = [
  'Commerce & Computer Science at UBC Sauder',
  'Building at the intersection of tech and business',
  'Product strategist and full-stack developer',
]

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const subtitle = subtitles[currentSubtitle]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < subtitle.length) {
            setDisplayedText(subtitle.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
          }
        }
      },
      isDeleting ? 30 : 50
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentSubtitle])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#3B82F6]/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-3xl animate-glow-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-heading font-bold text-[clamp(3rem,8vw,4.5rem)] leading-[1.1] tracking-tight text-[#F8FAFC]"
              >
                Ishaan Singh Gill
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-8 flex items-center justify-center lg:justify-start"
              >
                <p className="text-xl text-[#94A3B8] font-light">
                  {displayedText}
                  <span className="inline-block w-0.5 h-5 bg-[#3B82F6] ml-1 animate-pulse" />
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#94A3B8] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Fourth-year BUCS student combining rigorous engineering with strategic business
              thinking. Passionate about early-stage startups, product design, and building
              solutions that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="/Ishaan_Gill_Resume.pdf"
                download
                className="group px-8 py-4 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/20 hover:shadow-[#3B82F6]/40 hover:scale-105"
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/ishaansgill/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-[#1E293B] hover:border-[#3B82F6] text-[#F8FAFC] font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B82F6]/5"
              >
                LinkedIn ↗
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6]/40 to-[#3B82F6]/10 blur-2xl animate-glow-pulse" />

              {/* Photo container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#3B82F6]/30 shadow-2xl shadow-[#3B82F6]/20 ring-8 ring-[#0F172A]">
                <Image
                  src="/photos/hero.jpg"
                  alt="Ishaan Singh Gill"
                  fill
                  className="object-cover object-[center_60%] scale-[1.35]"
                  style={{ transformOrigin: 'center 60%' }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll to About" className="block animate-bounce">
          <svg
            className="w-6 h-6 text-[#94A3B8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
