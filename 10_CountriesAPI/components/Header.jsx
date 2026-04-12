import { useState } from "react"
import "../style.css"
import styles from "./Header.module.css"
import {FaMoon, FaSun} from "react-icons/fa"

const Header = () => {

  const [isDark, setIsDark] = useState(false)

  return (
    <nav>
    <header>
      <div className={styles.left}>
        <h3 className='montserrat-heading'>Countries</h3>
      </div>
      <div className={styles.right}>
        {
          isDark? (<FaSun style={{color: "orange", fontSize: "16px"}} />)
          : (<FaMoon style={{color: "black", fontSize: "16px"}} />)
        }
        <h4 className='montserrat-body' onClick={()=>{document.body.classList.toggle("dark"); setIsDark(!isDark)}}>{
          isDark? "Light Mode" : "Dark Mode"}</h4>
      </div>
    </header>
    </nav>
  )
}

export default Header
