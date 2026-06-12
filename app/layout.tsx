import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ishaan Singh Gill',
  description:
    'Portfolio of Ishaan Singh Gill, Commerce & Computer Science student at UBC Sauder, building at the intersection of tech and business.',
  metadataBase: new URL('https://ishaangill.com'),
  openGraph: {
    title: 'Ishaan Singh Gill',
    description: 'Commerce & Computer Science at UBC Sauder',
    url: 'https://ishaangill.com',
    siteName: 'Ishaan Singh Gill',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
