import styles from './Header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>ULTRASTRUTTURA</h1>
        {/* Decommenta quando aggiungi il logo in public/logo.png */}
        {/* <Image 
          src="/logo.png" 
          alt="Logo" 
          width={200} 
          height={50}
          className={styles.logo}
          priority
        /> */}
      </div>
    </header>
  )
}

