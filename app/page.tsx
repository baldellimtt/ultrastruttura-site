import Gallery from '@/components/Gallery'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.layout}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className={styles.main}>
        <Gallery />
      </main>
    </div>
  )
}

