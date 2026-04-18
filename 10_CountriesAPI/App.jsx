import { useState } from "react"
import { Outlet } from "react-router"
import Header from "./components/Header"
import { ThemeContext } from "./contexts/ThemeContext"

const App = () => {

    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("darkMode")))


    return (
            <ThemeContext.Provider value={[isDark, setIsDark]}>
            <Header />
            <Outlet />
            </ThemeContext.Provider>
    )

}

export default App