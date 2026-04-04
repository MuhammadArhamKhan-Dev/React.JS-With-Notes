import { useState } from "react"
import { Outlet } from "react-router"
import Header from "./components/Header"

const App = () => {

    const [query, setQuery] = useState('')

    const handleSearch = (e) => {
        setQuery(e.target.value.toLowerCase())
    }

    return (
        <>
            <Header />
            <Outlet />
        </>
    )

}

export default App