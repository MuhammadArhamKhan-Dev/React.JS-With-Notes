import styles from "./ShimmerCountryCard.module.css";

const ShimmerCountryCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default ShimmerCountryCard;
