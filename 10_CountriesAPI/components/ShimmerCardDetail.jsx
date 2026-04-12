import styles from "./ShimmerCardDetail.module.css"

const ShimmerCardDetail = () => {
  return (
    <section className={styles.section3}>
      <div className={[styles.first, styles.shimmer].join(' ')}></div>
    <div className={styles.second}>
      <div className={styles.main}>
        <div className={[styles.shimmerDetailsMain1, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetailsMain2, styles.shimmer].join(' ')}></div>
      </div>
      <div className={styles.details}>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
        <div className={[styles.shimmerDetails, styles.shimmer].join(' ')}></div>
      </div>
    </div>
    </section>
  )
}

export default ShimmerCardDetail
