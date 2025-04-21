import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/next'

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <body className="font-sans">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'init',
}

export default Layout
