import type { Config } from 'tailwindcss'

/**
 * Design tokens for the "annotated memo" direction.
 *
 * Colors are CSS variables (light on :root, dark on .dark) so the theme can be
 * switched with a single class. Six roles only: paper (ground), ink (text and
 * fills), muted (secondary text), rule (hairlines), marker (highlighter band),
 * focus (keyboard ring). There is no chromatic accent beyond the marker.
 */
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
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        rule: 'var(--rule)',
        marker: 'var(--marker)',
        focus: 'var(--focus)',
      },
      fontFamily: {
        // Newsreader carries headlines and body copy; Schibsted Grotesk is
        // reserved for interface text: nav, dates, tags, buttons, rail labels.
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Major-third scale on an 18px base. Serif sizes get a touch more
        // line-height than the sans interface sizes.
        meta: ['0.8125rem', { lineHeight: '1.45' }], // 13px, sans
        ui: ['0.9375rem', { lineHeight: '1.45' }], // 15px, sans
        body: ['1.125rem', { lineHeight: '1.55' }], // 18px, serif
        lead: ['1.375rem', { lineHeight: '1.45' }], // 22px, serif
        h3: ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.005em' }], // 28px, serif
        h2: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }], // 36px, serif
        display: ['clamp(2.5rem, 6vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        page: '72rem',
        measure: '68ch',
      },
      spacing: {
        rail: '14rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
