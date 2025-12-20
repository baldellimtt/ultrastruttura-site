'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumbs.module.css'

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Non mostrare breadcrumbs sulla home
  if (pathname === '/') {
    return null
  }

  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = segment.charAt(0).toUpperCase() + segment.slice(1)
    return { href, label }
  })

  const baseUrl = 'https://ultrastruttura.com'

  // Structured data per breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.label,
        item: `${baseUrl}${crumb.href}`,
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <ol className={styles.breadcrumbList}>
          <li className={styles.breadcrumbItem}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className={styles.breadcrumbItem}>
              <span className={styles.breadcrumbSeparator} aria-hidden="true">
                /
              </span>
              {index === breadcrumbs.length - 1 ? (
                <span className={styles.breadcrumbCurrent} aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className={styles.breadcrumbLink}>
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}

