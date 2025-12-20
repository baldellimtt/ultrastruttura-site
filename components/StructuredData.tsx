import { artworks } from '@/data/artworks'

export default function StructuredData() {
  const baseUrl = 'https://ultrastruttura.com'

  // Schema.org per Art Gallery
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    '@id': `${baseUrl}#gallery`,
    name: 'ultrastruttura',
    description: 'Contemporary abstract paintings by UltraStruttura. Unique abstract artwork, original abstract painting on canvas.',
    url: baseUrl,
    image: `${baseUrl}/logo.webp`,
    logo: `${baseUrl}/logo.webp`,
    sameAs: [
      'https://www.instagram.com/ultrastruttura/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergamo',
      addressCountry: 'IT',
    },
  }

  // Schema.org per ogni opera
  const artworksSchema = artworks.map((artwork) => ({
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    '@id': `${baseUrl}#artwork-${artwork.id}`,
    name: artwork.title,
    creator: {
      '@type': 'Person',
      '@id': `${baseUrl}#artist`,
      name: 'UltraStruttura',
    },
    dateCreated: artwork.year?.toString(),
    artMedium: artwork.medium || 'Oil on canvas',
    artform: 'Painting',
    genre: 'Abstract Art',
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}${artwork.image}`,
      contentUrl: `${baseUrl}${artwork.image}`,
    },
    width: artwork.dimensions?.split('x')[0]?.trim(),
    height: artwork.dimensions?.split('x')[1]?.trim(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'UltraStruttura',
    },
    inLanguage: ['it', 'en'],
  }))

  // Schema.org per Person (Artista)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}#artist`,
    name: 'UltraStruttura',
    givenName: 'Andrea',
    jobTitle: 'Contemporary Artist',
    description: 'Contemporary Italian artist from Bergamo, specializing in abstract oil paintings on canvas.',
    url: baseUrl,
    image: `${baseUrl}/logo.webp`,
    sameAs: [
      'https://www.instagram.com/ultrastruttura/',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergamo',
      addressRegion: 'Lombardy',
      addressCountry: 'IT',
    },
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






