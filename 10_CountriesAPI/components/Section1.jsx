import Filter from "./Filter"
import Search from "./Search"
import styles from "./Section1.module.css"

const Section1 = ({searchHandler}) => {
  return (
    <section className={styles.section1}>
      <Search searchHandler={searchHandler} />
      <Filter searchHandler = {searchHandler} />
    </section>
  )
}

export default Section1
