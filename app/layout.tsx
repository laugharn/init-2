import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body className="font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'init',
}

export default Layout
