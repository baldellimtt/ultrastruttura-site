import Gallery from '@/components/Gallery'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        <Gallery />
      </main>
    </div>
  )
}

