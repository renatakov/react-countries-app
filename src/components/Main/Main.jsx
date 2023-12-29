import s from "./Main.module.css"
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import { useState, useEffect } from "react";
import Country from "../Country/Country"

const Main = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((data) => setCountries(data.data))
    }, [])
    countries.sort((a, b) => a.name.common.toLowerCase() < b.name.common.toLowerCase() ? -1 : 1)
    console.log(countries)
    let Collection = () => {
        return countries.map((country)=>{
            return <Country
            key={country.cca2}
            name={country.name.common}
            population={country.population}
            region={country.region}
            
            capital={country.capital}
            flag={country.flags.png}
        />
        })
    }
    return (
        <main>
            <div className={s.block1}>

                <SearchBar />
                <div className={s.filter}>
                    <select name="regions" className={s.filterSelect}>
                        <option className={s.option}>Filter by Region:</option>
                        <option className={s.option}>Africa</option>
                        <option className={s.option}>America</option>
                        <option className={s.option}>Asia</option>
                        <option className={s.option}>Europe</option>
                        <option className={s.option}>Oceania</option>

                    </select>
                </div>
            </div>
                    <div className={s.countries}>
                        {Collection()}
                    </div>

        </main>
    )
}

export default Main;