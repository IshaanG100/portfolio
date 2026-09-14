import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-alt': 'var(--surface-alt)',
        fg: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          link: 'var(--accent-link)',
          weak: 'var(--accent-weak)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Space Grotesk display headings, tracking tightened.
        display: ['clamp(2.75rem, 7vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['clamp(1.9rem, 4vw, 2.6rem)', { lineHeight: '1.12', letterSpacing: '-0.02em' }],
        // Sans headings / labels
        h3: ['1.1875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        lead: ['1.125rem', { lineHeight: '1.65' }],
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        content: '64rem',
        reading: '42rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 18, 20, 0.04), 0 6px 20px rgba(17, 18, 20, 0.06)',
      },
      gridTemplateRows: {
        collapse: '0fr',
        expand: '1fr',
      },
      transitionProperty: {
        rows: 'grid-template-rows',
      },
      keyframes: {
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        caret: 'caret 1s step-end infinite',
      },
    },
  },
  plugins: [],
}

export default config
