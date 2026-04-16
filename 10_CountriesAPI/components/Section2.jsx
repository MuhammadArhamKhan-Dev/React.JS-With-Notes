import { useEffect, useState } from "react"
import CountryCard from "./CountryCard"
import styles from "./Section2.module.css"
import ShimmerCountryCard from "./ShimmerCountryCard"



const Section2 = ({ query = '' }) => {

    const [countriesData, setCountriesData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital")
            .then((res) => res.json())
            .then((data) => {
                setCountriesData(data)
                setLoading(false)
            })
    }, [])
    return (
        <section className={styles.section2}>
            {loading
                ? Array.from({ length: 8 }).map((_, i) => <ShimmerCountryCard key={i} />)
                :
                
                    countriesData
                .filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
                        .map((country, i) => (
                            <CountryCard key={i} name={country.name.common}
                                flag={country.flags.svg}
                                population={country.population.toLocaleString("en-UN")}
                                region={country.region}
                                capital={country.capital?.[0]}
                            />
                        ))
                }
        </section>
    )
}

export default Section2
