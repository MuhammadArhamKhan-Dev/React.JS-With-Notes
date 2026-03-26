import styles from "./CountryCard.module.css"
import "../style.css"

const CountryCard = ({ name, flag, population, region, capital }) => {
  return (
    <a className={[styles.countryCard, "montserrat-body"].join(' ')} href={`/index.html?name=${name}`}>

      <div className={styles.imgContainer}>
        <img src={flag} alt={name + "flag"} />
      </div>

      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <p><b>Population:</b> {population}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital}</p>
      </div>

    </a>
  )
}

export default CountryCard
