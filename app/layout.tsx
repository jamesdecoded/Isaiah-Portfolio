import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isaiah James | Full-Stack Developer',
  description: 'Full-Stack Developer specializing in FastAPI, Python, and modern web technologies. Building high-performance web applications.',
  keywords: ['Full-Stack Developer', 'FastAPI', 'Python', 'React', 'Web Development', 'Isaiah James'],
  authors: [{ name: 'Isaiah James' }],
  openGraph: {
    title: 'Isaiah James | Full-Stack Developer',
    description: 'I build modern web applications end-to-end. Fast backends, beautiful frontends, and everything in between.',
    type: 'website',
    url: 'https://yourdomain.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Isaiah James - Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaiah James | Full-Stack Developer',
    description: 'I build modern web applications end-to-end. Fast backends, beautiful frontends, and everything in between.',
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
