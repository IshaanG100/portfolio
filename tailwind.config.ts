import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-sora)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          bg: '#0A0F1E',
          'bg-secondary': '#0F172A',
          accent: '#3B82F6',
          text: '#F8FAFC',
          'text-secondary': '#94A3B8',
          divider: '#1E293B',
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      backgroundSize: {
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
}

export default config
