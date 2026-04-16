import styles from "./CountryCard.module.css"
import "../style.css"
import { Link } from 'react-router'

const CountryCard = ({ name, flag, population, region, capital }) => {

  return (
    <Link className={[styles.countryCard, "montserrat-body"].join(' ')} to={`/${name.toLowerCase()}`}>

      <div className={styles.imgContainer}>
        <img src={flag} alt={name + "flag"} />
      </div>

      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <p><b>Population:</b> {population}</p>
        <p><b>Region:</b> {region}</p>
        <p><b>Capital:</b> {capital}</p>
      </div>

    </Link>
  )
}

export default CountryCard
