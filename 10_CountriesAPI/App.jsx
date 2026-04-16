import { useState } from "react"
import { Outlet } from "react-router"
import Header from "./components/Header"
import { ThemeContext } from "./contexts/ThemeContext"

const App = () => {

    const [query, setQuery] = useState('')
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("darkMode")))

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    return (
            <ThemeContext.Provider value={[isDark, setIsDark]}>
            <Header />
            <Outlet />
            </ThemeContext.Provider>
    )

}

export default App