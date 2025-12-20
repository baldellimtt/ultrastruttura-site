'use client'

import styles from './Gallery.module.css'
import { artworks } from '@/data/artworks'

export default function Gallery() {
  if (artworks.length === 0) {
    return (
      <div className={styles.gallery}>
        <div className={styles.galleryContainer}>
          <p style={{ textAlign: 'center', padding: '4rem' }}>
            Aggiungi le tue opere in <code>data/artworks.ts</code>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <div className={styles.collage}>
          {artworks.map((artwork) => (
            <div key={artwork.id} className={styles.artworkItem}>
              <img
                src={artwork.image}
                alt={`${artwork.title} - UltraStruttura ${artwork.year || ''}`}
                className={styles.artworkImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

