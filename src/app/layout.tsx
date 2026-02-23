import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s · Sangwoo Heo',
    default: 'Sangwoo Heo',
  },
  description: 'AI Safety Policy & Management Lead at NAVER Corporation.',
  openGraph: {
    siteName: 'Sangwoo Heo',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-ink bg-bg leading-[1.7] min-h-screen flex flex-col`}>
        <Nav />
        <main className="max-w-content w-full mx-auto px-4 pt-8 pb-12 sm:px-6 sm:pt-14 sm:pb-20 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
