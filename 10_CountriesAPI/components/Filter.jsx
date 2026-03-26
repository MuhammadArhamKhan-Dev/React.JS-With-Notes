import styles from "./Filter.module.css"
import "../style.css"
const Filter = () => {
  return (
    <select className="montserrat-body">
        <option hidden="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="America">America</option>
      <option value="Ocenia">Ocenia</option>
    </select>
  )
}

export default Filter
