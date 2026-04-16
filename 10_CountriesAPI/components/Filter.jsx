import styles from "./Filter.module.css"
import "../style.css"
const Filter = ({searchHandler}) => {
  return (
    <select className="montserrat-body" onChange={searchHandler}>
        <option hidden>Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Americas">Americas</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Filter
