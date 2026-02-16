import siteContentData from './site-content.json'

export interface Artwork {
  id: number
  title: string
  info?: string
  year: number
  medium?: string
  dimensions?: string
  location?: string
  image: string
  available?: boolean
}

export interface SiteSettings {
  brandName: string
  artistName: string
  artistLabel: string
  seoTitle: string
  seoDescription: string
}

interface SocialLinks {
  instagram: string
  twitterHandle: string
}

interface SiteContent {
  site?: Partial<SiteSettings>
  social?: Partial<SocialLinks>
  artworks?: Array<Partial<Artwork>>
}

const content = siteContentData as SiteContent

const defaultSiteSettings: SiteSettings = {
  brandName: 'UltraStruttura',
  artistName: 'Andrea Baldelli',
  artistLabel: 'Andrea Baldelli',
  seoTitle: 'UltraStruttura | Contemporary Abstract Paintings & Art',
  seoDescription:
    'Discover unique contemporary abstract paintings by UltraStruttura. Original abstract artwork on canvas for collectors.',
}

export const siteSettings: SiteSettings = {
  brandName: content.site?.brandName || defaultSiteSettings.brandName,
  artistName: content.site?.artistName || defaultSiteSettings.artistName,
  artistLabel: content.site?.artistLabel || defaultSiteSettings.artistLabel,
  seoTitle: content.site?.seoTitle || defaultSiteSettings.seoTitle,
  seoDescription: content.site?.seoDescription || defaultSiteSettings.seoDescription,
}

export const socialLinks: SocialLinks = {
  instagram: content.social?.instagram || 'https://www.instagram.com/ultrastruttura/',
  twitterHandle: content.social?.twitterHandle || '@ultrastruttura',
}

const rawArtworks = Array.isArray(content.artworks) ? content.artworks : []

export const artworks: Artwork[] = rawArtworks
  .reduce<Artwork[]>((items, artwork, index) => {
    const image = typeof artwork.image === 'string' ? artwork.image.trim() : ''
    if (!image) return items

    items.push({
      id: typeof artwork.id === 'number' ? artwork.id : index + 1,
      title: typeof artwork.title === 'string' ? artwork.title : `Opera ${index + 1}`,
      info: typeof artwork.info === 'string' ? artwork.info : undefined,
      year: typeof artwork.year === 'number' ? artwork.year : new Date().getFullYear(),
      medium: typeof artwork.medium === 'string' ? artwork.medium : undefined,
      dimensions: typeof artwork.dimensions === 'string' ? artwork.dimensions : undefined,
      location: typeof artwork.location === 'string' ? artwork.location : undefined,
      image,
      available: typeof artwork.available === 'boolean' ? artwork.available : undefined,
    })

    return items
  }, [])
  
