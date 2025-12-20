import { MetadataRoute } from 'next'
import { artworks } from '@/data/artworks'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ultrastruttura.com'

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
  ]

  // Aggiungi route per ogni opera (se vuoi pagine individuali)
  const artworkRoutes = artworks.map((artwork) => ({
    url: `${baseUrl}/artwork/${artwork.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...artworkRoutes]
}

