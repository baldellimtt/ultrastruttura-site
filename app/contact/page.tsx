import ContactForm from '@/components/ContactForm'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'
import layoutStyles from '../page.module.css'

export default function Contact() {
  return (
    <div className={layoutStyles.layout}>
      <Navigation />
      <main className={layoutStyles.main}>
        <div className={styles.contact}>
          <div className={styles.contactContainer}>
            <div className={styles.info}>
              <h1 className={styles.name}>Andrea</h1>
              <p className={styles.location}>Bergamo, Italy</p>
              
              <div className={styles.usedToBe}>
                <p className={styles.label}>Used to be:</p>
                <ul className={styles.links}>
                  <li>
                    <a href="https://ccoorrppoocc.wordpress.com/" target="_blank" rel="noopener noreferrer">
                      CORPOC
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/satellitepress/" target="_blank" rel="noopener noreferrer">
                      Satellite Press
                    </a>
                  </li>
                  <li>
                    <a href="https://www.discogs.com/label/152921-TDD-Records?page=1" target="_blank" rel="noopener noreferrer">
                      TDD records
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.formSection}>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

