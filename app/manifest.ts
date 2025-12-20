import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ultrastruttura - Contemporary Art',
    short_name: 'ultrastruttura',
    description: 'Contemporary art paintings by UltraStruttura',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/favicon.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
    lang: 'it',
    dir: 'ltr',
    orientation: 'portrait',
  }
}



