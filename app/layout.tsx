import type { Metadata } from 'next'
import { Newsreader, Schibsted_Grotesk } from 'next/font/google'
import './globals.css'

// Newsreader carries headlines and body copy. The optical-size axis lets the
// same family read as a text face at 18px and a display face at 68px.
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  // Next has no size-adjust metrics for Newsreader, so the automatic fallback
  // override is disabled; the serif stack below covers the swap window.
  adjustFontFallback: false,
  variable: '--font-serif',
  display: 'swap',
})

// Schibsted Grotesk is reserved for interface text.
const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ishaan Singh Gill: Turning business problems into shipped product',
  description:
    'Ishaan Singh Gill: Computer Science and Commerce at UBC Sauder, aiming for product management. Turning business problems into shipped product.',
  metadataBase: new URL('https://ishaangill.com'),
  openGraph: {
    title: 'Ishaan Singh Gill: Turning business problems into shipped product',
    description: 'Computer Science and Commerce at UBC Sauder, aiming for product management.',
    url: 'https://ishaangill.com',
    siteName: 'Ishaan Singh Gill',
    locale: 'en_CA',
    type: 'website',
  },
}

// Sets the theme class before paint to avoid a flash. A stored choice wins;
// otherwise the system preference decides.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d){document.documentElement.classList.add('dark')}}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${newsreader.variable} ${schibsted.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
