import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'DevWithJames | AI Data Evaluation Specialist',
  description: 'Software Engineer and AI Data Evaluation Specialist. Writing benchmark tasks and evaluation rubrics for AI training platforms, and building Python-based workflows.',
  keywords: ['AI Evaluation', 'Software Engineer', 'Python', 'Benchmark Authoring', 'Data Specialist', 'Isaiah James', 'DevWithJames'],
  authors: [{ name: 'Isaiah James' }],
  openGraph: {
    title: 'DevWithJames | AI Data Evaluation Specialist',
    description: 'Software Engineer and AI Data Evaluation Specialist with 2+ years improving data quality and building Python-based workflows.',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevWithJames - AI Data Evaluation Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevWithJames | AI Data Evaluation Specialist',
    description: 'Software Engineer and AI Data Evaluation Specialist with 2+ years improving data quality and building Python-based workflows.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
