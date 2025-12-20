'use client'

import { useEffect, useRef } from 'react'
import styles from './Gallery.module.css'
import { artworks } from '@/data/artworks'

export default function Gallery() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item)
      })
    }
  }, [])

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
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              ref={(el) => {
                itemsRef.current[index] = el
              }}
              className={styles.artworkItem}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={artwork.image}
                  alt={`${artwork.title} - UltraStruttura ${artwork.year || ''} - Contemporary Art Painting`}
                  title={`${artwork.title} by UltraStruttura ${artwork.year || ''}`}
                  className={styles.artworkImage}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={artwork.id <= 3 ? 'high' : 'low'}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

