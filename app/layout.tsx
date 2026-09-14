import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ishaan Singh Gill · Product-Minded BUCS Student at UBC',
  description:
    'Ishaan Singh Gill: Computer Science and Commerce at UBC Sauder, aiming for product management.',
  metadataBase: new URL('https://ishaangill.com'),
  openGraph: {
    title: 'Ishaan Singh Gill · Product-Minded BUCS Student at UBC',
    description: 'Computer Science and Commerce at UBC Sauder, aiming for product management.',
    url: 'https://ishaangill.com',
    siteName: 'Ishaan Singh Gill',
    locale: 'en_CA',
    type: 'website',
  },
}

// Sets the theme class before paint to avoid a flash. Defaults to light.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
