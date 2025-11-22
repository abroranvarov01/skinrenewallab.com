import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' })
const inter = Inter({ subsets: ["latin"], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'SkinRenewalLab - Premium Anti-Aging Serums & Reviews',
  description: 'Discover the best anti-aging serums backed by science. Expert reviews, comparisons, and recommendations for youthful, radiant skin.',
  generator: 'v0.app',
  keywords: ['anti-aging serums', 'skincare', 'skin renewal', 'anti-wrinkle', 'youth serum', 'face serum'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
