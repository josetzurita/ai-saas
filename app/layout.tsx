import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genius',
  description: 'AI Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
