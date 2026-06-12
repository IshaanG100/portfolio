'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-5xl font-bold text-[#F8FAFC] mb-6">Get in Touch</h2>
          <p className="text-[#94A3B8] text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have an opportunity, a question, or just want to say hi, my inbox is always
            open. Let&apos;s build something great together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="mailto:Ishaansgill@icloud.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50 hover:scale-105"
            >
              <EmailIcon />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/ishaansgill/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#1E293B] hover:border-[#3B82F6] text-[#F8FAFC] font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B82F6]/5"
            >
              <LinkedInIcon />
              LinkedIn ↗
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 pt-8 border-t border-[#1E293B]"
          >
            <p className="text-[#94A3B8]/60 text-sm">
              © {new Date().getFullYear()} Ishaan Singh Gill · Built with Next.js & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
