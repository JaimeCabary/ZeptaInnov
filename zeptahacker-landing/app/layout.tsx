import React from 'react';  // ✅ Fixed import syntax
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zeptahacker Innov - Developer-First SaaS Platform with AI Workflows',
  description: 'Advanced versioning, checkpoints, and AI-powered workflows for modern developers. Experience the future of SaaS development with Zeptahacker Innov.',
  keywords: 'SaaS, versioning, AI workflows, developer tools, API integration',
  authors: [{ name: 'Zeptahacker Innov' }],
  openGraph: {
    title: 'Zeptahacker Innov - Next-Gen Developer Platform',
    description: 'Advanced versioning, checkpoints, and AI-powered workflows',
    type: 'website',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Zeptahacker Innov",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Zeptahacker Innovationsa"
              }
            })
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Android icons */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}