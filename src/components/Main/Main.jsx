import s from "./Main.module.css"
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Country from "../Country/Country"
import SearchList from "../SearchList/SearchList";
import Select from "react-dropdown-select"

const Main = () => {
    const [searchList, setSearchList] = useState([])
    const [countries, setCountries] = useState([])
    const options = [
        {
            value: 1,
            label: "Africa"
        },
        {
            value: 2,
            label: "America"
        },
        {
            value: 3,
            label: "Asia"
        },
        {
            value: 4,
            label: "Europe"
        },
        {
            value: 5,
            label: "Oceania"
        }
    ];
    const inputSearchRef = useRef(null)
    function selectFunc(e) {
            axios.get(`https://restcountries.com/v3.1/region/${e}`)
                .then((data) => setCountries(data.data))
        
    }
    function handleInput() {
        if (inputSearchRef.current.value === '') {
            axios.get("https://restcountries.com/v3.1/all")
                .then((data) => setCountries(data.data))
        } else {
            axios.get(`https://restcountries.com/v3.1/name/${inputSearchRef.current.value}`)
                .then((data) => setSearchList(data.data))
        }
    }
    useEffect(() => {

        axios.get("https://restcountries.com/v3.1/all")
            .then((data) => setCountries(data.data))

    }, [])
    countries.sort((a, b) => a.name.common.toLowerCase() < b.name.common.toLowerCase() ? -1 : 1)
    console.log(countries);
    let Collection = () => {
        return countries.map((country) => {
            return <Country
                key={country.cca2}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flag={country.flags.png}
                nativeName={country.name.nativeName ? Object.values(country.name.nativeName)[0].common : []}
                subregion={country.subregion}
                tld={country.tld ? country.tld.join(', ') : []}
                languages={country.languages ? Object.values(country.languages).join(', ') : []}
                currencies={country.currencies ? Object.values(country.currencies)[0].name : []}
                borderCountries={country.borders ? country.borders.join(', ') : []}
            />
        })
    }
    return (
        <main>
            <div className={s.block1}>

                <div className={s.searchBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                    <input onInput={handleInput} ref={inputSearchRef} className={s.inputCountry} type="text" placeholder="Search for a country..." />
                </div>

                <Select style={{ background: "#fff", width: "100%"}} searchable={false} clearable={false} options={options}  placeholder="Filter By Region" onChange={(e)=>selectFunc(e[0].label)} />
            </div>
            <div className={s.countries}>
                {inputSearchRef.current && inputSearchRef.current.value == "" ? Collection() : <SearchList list={searchList} />}

            </div>


        </main >
    )
}

export default Main;