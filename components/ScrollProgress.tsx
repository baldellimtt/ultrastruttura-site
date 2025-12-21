'use client'

import { useEffect, useState } from 'react'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <div 
      className={styles.progressBar}
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    >
      <div 
        className={styles.progressFill}
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}




