import { artworks } from '@/data/artworks'

export default function StructuredData() {
  const baseUrl = 'https://ultrastruttura.com'

  // Schema.org per Art Gallery
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    name: 'ultrastruttura',
    description: 'Contemporary art paintings by UltraStruttura',
    url: baseUrl,
    image: `${baseUrl}/logo.webp`,
    sameAs: [
      // Aggiungi qui i link ai social media se disponibili
    ],
  }

  // Schema.org per ogni opera
  const artworksSchema = artworks.map((artwork) => ({
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: artwork.title,
    creator: {
      '@type': 'Person',
      name: 'UltraStruttura',
    },
    dateCreated: artwork.year?.toString(),
    artMedium: artwork.medium || 'Oil on canvas',
    artform: 'Painting',
    image: `${baseUrl}${artwork.image}`,
    width: artwork.dimensions?.split('x')[0]?.trim(),
    height: artwork.dimensions?.split('x')[1]?.trim(),
  }))

  // Schema.org per Person (Artista)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'UltraStruttura',
    jobTitle: 'Contemporary Artist',
    description: 'Contemporary Italian artist specializing in oil paintings',
    url: baseUrl,
    image: `${baseUrl}/logo.webp`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {artworksSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}






