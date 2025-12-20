import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ultrastruttura',
  description: 'Opere d\'arte contemporanee di UltraStruttura. Dipinti, quadri e opere originali.',
  keywords: 'UltraStruttura, arte contemporanea, dipinti, quadri, olio su tela, artista italiano',
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
  openGraph: {
    title: 'ultrastruttura',
    description: 'Opere d\'arte contemporanee di UltraStruttura',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>{children}</body>
    </html>
  )
}

