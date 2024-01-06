import s from "./Main.module.css"
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Country from "../Country/Country"
import SearchList from "../SearchList/SearchList";

const Main = () => {
    const [countries, setCountries] = useState([])
    const [searchList, setSearchList] = useState([])
    const inputSearchRef = useRef(null)
    function handleInput() {
        axios.get(`https://restcountries.com/v3.1/name/${inputSearchRef.current.value}`)
            .then((data) => setSearchList(data.data))
    }
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then((data) => setCountries(data.data))
    }, [])
    countries.sort((a, b) => a.name.common.toLowerCase() < b.name.common.toLowerCase() ? -1 : 1)
    console.log(countries)
    let Collection = () => {
        return countries.map((country) => {
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

                <div className={s.searchBar}>
                    <button className={s.searchBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    </button>
                    <input onInput={handleInput} ref={inputSearchRef} className={s.inputCountry} type="text" placeholder="Search for a country..." />
                </div>
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
            {/* {inputSearchRef.current.value === undefined ? 
            return (
            <div className={s.countries}>
                {Collection()}
            </div>
            ) : (
            <SearchList list={searchList} />
            );
            } */}
        {/* </div> */}

        </main >
    )
}

export default Main;