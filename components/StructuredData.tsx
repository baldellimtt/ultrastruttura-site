import { artworks, siteSettings, socialLinks } from '@/data/artworks'

export default function StructuredData() {
  const baseUrl = 'https://ultrastruttura.com'

  // Schema.org per Art Gallery
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ArtGallery',
    '@id': `${baseUrl}#gallery`,
    name: siteSettings.brandName.toLowerCase(),
    alternateName: siteSettings.brandName,
    description: siteSettings.seoDescription,
    url: baseUrl,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.webp`,
      contentUrl: `${baseUrl}/logo.webp`,
    },
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.webp`,
      contentUrl: `${baseUrl}/logo.webp`,
    },
    sameAs: [
      socialLinks.instagram,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergamo',
      addressRegion: 'Lombardy',
      addressCountry: 'IT',
    },
  }

  // Schema.org per ogni opera
  const artworksSchema = artworks.map((artwork) => {
    const dimensions = artwork.dimensions?.split('x').map(d => d.trim())
    const width = dimensions?.[0]
    const height = dimensions?.[1]
    
    return {
      '@context': 'https://schema.org',
      '@type': 'VisualArtwork',
      '@id': `${baseUrl}#artwork-${artwork.id}`,
      name: artwork.title,
      alternateName: `${siteSettings.brandName} ${artwork.title} ${artwork.year}`,
      description: `${artwork.title} (${artwork.year}) - Original contemporary abstract painting by ${siteSettings.brandName}. ${artwork.medium || 'Oil on canvas'}${artwork.dimensions ? `, ${artwork.dimensions}` : ''}. Unique abstract artwork for collectors.`,
      creator: {
        '@type': 'Person',
        '@id': `${baseUrl}#artist`,
        name: siteSettings.brandName,
        givenName: siteSettings.artistName.split(' ')[0] || siteSettings.artistName,
        familyName: siteSettings.artistName.split(' ').slice(1).join(' ') || siteSettings.artistName,
      },
      dateCreated: artwork.year?.toString(),
      copyrightYear: artwork.year?.toString(),
      artMedium: artwork.medium || 'Oil on canvas',
      artform: 'Painting',
      genre: 'Abstract Art',
      artMovement: 'Contemporary Art',
      image: {
        '@type': 'ImageObject',
        url: `${baseUrl}${artwork.image}`,
        contentUrl: `${baseUrl}${artwork.image}`,
        encodingFormat: 'image/webp',
        width: width,
        height: height,
      },
      width: width,
      height: height,
      copyrightHolder: {
        '@type': 'Person',
        '@id': `${baseUrl}#artist`,
        name: siteSettings.brandName,
      },
      inLanguage: ['it', 'en', 'de', 'fr'],
      keywords: `contemporary abstract art, abstract painting, ${artwork.medium?.toLowerCase() || 'oil on canvas'}, original artwork, ${siteSettings.brandName}, contemporary artist`,
      material: artwork.medium || 'Oil on canvas',
      surface: 'Canvas',
    }
  })

  // Schema.org per Person (Artista)
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${baseUrl}#artist`,
    name: siteSettings.brandName,
    alternateName: siteSettings.artistName,
    givenName: siteSettings.artistName.split(' ')[0] || siteSettings.artistName,
    familyName: siteSettings.artistName.split(' ').slice(1).join(' ') || siteSettings.artistName,
    jobTitle: 'Contemporary Artist',
    description: 'Contemporary Italian artist from Bergamo, Italy, specializing in abstract oil paintings on canvas. Creating unique abstract artworks for collectors worldwide.',
    url: baseUrl,
    image: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.webp`,
      contentUrl: `${baseUrl}/logo.webp`,
    },
    sameAs: [
      socialLinks.instagram,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bergamo',
      addressRegion: 'Lombardy',
      postalCode: '24100',
      addressCountry: 'IT',
    },
    nationality: {
      '@type': 'Country',
      name: 'Italy',
    },
    knowsAbout: ['Abstract Art', 'Contemporary Art', 'Oil Painting', 'Canvas Art'],
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
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: `${baseUrl}/contact`,
              },
            ],
          }),
        }}
      />
      {/* Collection Schema per la galleria */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': `${baseUrl}#collection`,
            name: `${siteSettings.brandName} Art Collection`,
            description: `Collection of contemporary abstract paintings by ${siteSettings.brandName}`,
            url: baseUrl,
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: artworks.length,
              itemListElement: artworks.map((artwork, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'VisualArtwork',
                  '@id': `${baseUrl}#artwork-${artwork.id}`,
                  name: artwork.title,
                },
              })),
            },
          }),
        }}
      />
    </>
  )
}






