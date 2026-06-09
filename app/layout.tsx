import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  variable: '--font-space-grotesk', 
  subsets: ['latin'],
  display: 'swap'
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Surya TK | Backend & Cloud Engineer',
  description: 'Backend & Cloud Engineer specializing in scalable systems, cloud infrastructure, and distributed architectures. Building production-ready software with Go, Spring Boot, and AWS.',
  keywords: ['Backend Engineer', 'Cloud Engineer', 'AWS', 'Spring Boot', 'Go', 'DevOps', 'Distributed Systems'],
  authors: [{ name: 'Surya TK' }],
  creator: 'Surya TK',
  openGraph: {
    title: 'Surya TK | Backend & Cloud Engineer',
    description: 'Backend & Cloud Engineer specializing in scalable systems, cloud infrastructure, and distributed architectures.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya TK | Backend & Cloud Engineer',
    description: 'Backend & Cloud Engineer specializing in scalable systems, cloud infrastructure, and distributed architectures.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#080808',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} bg-[#080808]`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
