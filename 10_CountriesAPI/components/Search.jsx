import styles from "./Search.module.css"
import "../style.css"

const Search = ({searchHandler}) => {
  return (
    <div className={[styles.search,"montserrat-body"].join(' ')}>
      <input className="montserrat-body" type="text" placeholder="🔍︎ Search for a country..." onChange={searchHandler} />
    </div>
  )
}

export default Search
