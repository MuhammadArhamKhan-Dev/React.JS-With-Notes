import "../style.css"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <nav>
    <header>
      <div className={styles.left}>
        <h3 className='montserrat-heading'>Countries</h3>
      </div>
      <div className={styles.right}>
        <h4 className='montserrat-body'>Dark Mode</h4>
      </div>
    </header>
    </nav>
  )
}

export default Header
