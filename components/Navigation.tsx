'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const menuItems = [
  'Paintings',
  'Contact',
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
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

