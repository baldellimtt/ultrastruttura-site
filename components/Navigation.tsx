'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const menuItems = [
  'Paintings',
  'Contact',
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const [navHeight, setNavHeight] = useState(60) // Default fallback

  // Calcola l'altezza reale del nav per posizionare il menu correttamente
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight
        setNavHeight(height)
        // Imposta variabile CSS per uso nel CSS
        document.documentElement.style.setProperty('--nav-height', `${height}px`)
      }
    }

    updateNavHeight()

    // Aggiorna quando la finestra viene ridimensionata o quando il menu si apre/chiude
    window.addEventListener('resize', updateNavHeight)
    
    // Usa ResizeObserver per rilevare cambiamenti nell'altezza del nav
    const resizeObserver = new ResizeObserver(updateNavHeight)
    if (navRef.current) {
      resizeObserver.observe(navRef.current)
    }

    return () => {
      window.removeEventListener('resize', updateNavHeight)
      resizeObserver.disconnect()
    }
  }, [isMenuOpen]) // Ricontrolla quando il menu si apre/chiude

  // Prevenire lo scroll del body quando il menu è aperto su mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div 
        className={styles.menuOverlay}
        onClick={handleCloseMenu}
        aria-hidden={!isMenuOpen}
      />
      <nav 
        ref={navRef}
        className={`${styles.nav} ${isMenuOpen ? styles.navMenuOpen : ''}`}
        style={{ '--nav-height': `${navHeight}px` } as React.CSSProperties}
      >
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logoLink} onClick={handleMenuLinkClick}>
            <div className={styles.logoContainer}>
              <img
                src="/logo.webp"
                alt="UltraStruttura"
                className={styles.logo}
              />
              <p className={styles.logoText}>ultrastruttura</p>
            </div>
          </Link>
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            type="button"
          >
            <span className={styles.menuIcon}>{isMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
          <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            {menuItems.map((item) => (
              <li key={item}>
                <Link 
                  href={item === 'Contact' ? '/contact' : '/'}
                  onClick={handleMenuLinkClick}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

