import Header from "./components/Header"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import { useState } from "react"

const App = () => {

    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    return (
        <>
            <Header />
            <main>
                <Section1 searchHandler={handleSearch} />
                <Section2 query={query} />  
            </main>
        </>
    )

}

export default App