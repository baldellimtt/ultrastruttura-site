import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'ultrastruttura - Contemporary Abstract Paintings | Unique Abstract Artwork',
  description: 'Original contemporary abstract paintings by UltraStruttura. Unique abstract artwork, original abstract painting on canvas, contemporary abstract art for collectors. Dipinti astratti contemporanei originali, opere d\'arte astratte uniche, arte astratta contemporanea per collezionisti. Peintures abstraites contemporaines originales, œuvres d\'art abstraites uniques. Originales zeitgenössisches abstraktes Gemälde, einzigartiges abstraktes Kunstwerk.',
  keywords: [
    'ultrastruttura',
    'original contemporary abstract painting',
    'unique abstract artwork',
    'original abstract painting on canvas',
    'contemporary abstract art for collectors',
    'dipinto astratto contemporaneo originale',
    'opera arte astratta unica',
    'dipinto astratto su tela',
    'arte astratta per collezionisti',
    'peinture abstraite contemporaine originale',
    'œuvre d\'art abstraite unique',
    'peinture abstraite sur toile',
    'art abstrait pour collectionneurs',
    'originales zeitgenössisches abstraktes Gemälde',
    'einzigartiges abstraktes Kunstwerk',
    'abstraktes Gemälde auf Leinwand',
    'abstrakte Kunst für Sammler',
    'contemporary art',
    'arte contemporanea',
    'zeitgenössische kunst',
    'art contemporain',
    'paintings',
    'dipinti',
    'gemälde',
    'peintures',
    'oil paintings',
    'olio su tela',
    'Italian artist',
    'artista italiano',
  ].join(', '),
  authors: [{ name: 'UltraStruttura' }],
  creator: 'UltraStruttura',
  publisher: 'UltraStruttura',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.webp',
    apple: '/favicon.webp',
  },
  openGraph: {
    title: 'ultrastruttura - Contemporary Abstract Paintings',
    description: 'Contemporary abstract paintings by UltraStruttura. Unique abstract artwork, abstract painting on canvas, contemporary abstract art for collectors. Dipinti astratti contemporanei, opere d\'arte astratte uniche.',
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_US', 'de_DE', 'fr_FR', 'ja_JP'],
    siteName: 'ultrastruttura',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ultrastruttura - Contemporary Abstract Paintings',
    description: 'Contemporary abstract paintings, unique abstract artwork, contemporary abstract art for collectors',
  },
  alternates: {
    canonical: 'https://ultrastruttura.com',
    languages: {
      'it': 'https://ultrastruttura.com',
      'en': 'https://ultrastruttura.com',
      'de': 'https://ultrastruttura.com',
      'fr': 'https://ultrastruttura.com',
      'ja': 'https://ultrastruttura.com',
    },
  },
  metadataBase: new URL('https://ultrastruttura.com'),
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
        <link rel="canonical" href="https://ultrastruttura.com" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
