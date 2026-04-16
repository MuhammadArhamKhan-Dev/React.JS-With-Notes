import { useContext } from "react"
import "../style.css"
import styles from "./Header.module.css"
import {FaMoon, FaSun} from "react-icons/fa"
import { ThemeContext } from "../contexts/ThemeContext"

const Header = () => {

  const [isDark, setIsDark] = useContext(ThemeContext)
  return (
    <nav className={`${isDark? 'dark' : ''}`}>
    <header>
      <div className={styles.left}>
        <h3 className='montserrat-heading'>Countries</h3>
      </div>
      <div className={styles.right}>
        {
          isDark? (<FaSun style={{color: "orange"}} />)
          : (<FaMoon style={{color: "black"}} />)
        }
        <h4 className='montserrat-body' onClick={()=>{setIsDark(!isDark)
          localStorage.setItem("darkMode", !isDark)
        }}>{
          isDark? "Light Mode" : "Dark Mode"}</h4>
          
      </div>
    </header>
    </nav>
  )
}

export default Header
