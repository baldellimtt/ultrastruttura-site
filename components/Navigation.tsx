'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const menuItems = [
  'Paintings',
  'Bio',
  'Contact',
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <img
              src="/logo.webp"
              alt="UltraStruttura"
              className={styles.logo}
            />
            <p className={styles.logoText}>ultrastruttura</p>
          </div>
        </Link>
        <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={styles.menuIcon}>Menu</span>
        </div>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
          {menuItems.map((item) => (
            <li key={item}>
              <Link href={item === 'Contact' ? '/contact' : '/'}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

