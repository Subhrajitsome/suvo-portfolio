import React from 'react'
import './globals.css'

export const metadata = {
  title: 'CreatorBoySuvo | Cinematic Edits',
  description: 'Punchy, 4K color-graded movie and music video edits.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body>{children}</body>
    </html>
  )
}
