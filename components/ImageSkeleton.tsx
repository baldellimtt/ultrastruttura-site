'use client'

import styles from './ImageSkeleton.module.css'

export default function ImageSkeleton() {
  return (
    <div className={styles.skeleton} aria-hidden="true">
      <div className={styles.skeletonShimmer} />
    </div>
  )
}




