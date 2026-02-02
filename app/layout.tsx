import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevWithJames | Junior Software Engineer',
  description: 'Junior Software Engineer and Data Specialist. Building efficient software solutions with Python, web technologies, and APIs.',
  keywords: ['Software Engineer', 'Python', 'Web Development', 'Data Specialist', 'Isaiah James', 'DevWithJames'],
  authors: [{ name: 'Isaiah James' }],
  openGraph: {
    title: 'DevWithJames | Junior Software Engineer',
    description: 'Building efficient software solutions with Python, web technologies, and APIs. 2+ years of experience in data analytics and software development.',
    type: 'website',
    url: 'https://yourdomain.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevWithJames - Junior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevWithJames | Junior Software Engineer',
    description: 'Building efficient software solutions with Python, web technologies, and APIs. 2+ years of experience in data analytics and software development.',
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
      </body>
    </html>
  )
}
