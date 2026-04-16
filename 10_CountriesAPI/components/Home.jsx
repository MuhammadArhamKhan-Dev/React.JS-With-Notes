import Section1 from "./Section1"
import Section2 from "./Section2"
import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
const Home = () => {

    const [query, setQuery] = useState('')
    const [isDark] = useContext(ThemeContext)


    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase())
    }
    return (
        <main className={`${isDark ? 'dark' : ''}`}>
            <Section1 searchHandler={handleSearch} />
            <Section2 query={query} />
        </main>
    )
}

export default Home
