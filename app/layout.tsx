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
  title: 'Surya TK | Full Stack Developer',
  description: 'Full Stack Developer with a passion for cloud infrastructure and DevOps. Building production-ready applications with React, Spring Boot, Go, and AWS.',
  keywords: ['Full Stack Developer', 'Cloud Engineer', 'DevOps', 'AWS', 'Spring Boot', 'React', 'Go', 'Next.js'],
  authors: [{ name: 'Surya TK' }],
  creator: 'Surya TK',
  openGraph: {
    title: 'Surya TK | Full Stack Developer',
    description: 'Full Stack Developer with a passion for cloud infrastructure and DevOps.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surya TK | Full Stack Developer',
    description: 'Full Stack Developer with a passion for cloud infrastructure and DevOps.',
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
