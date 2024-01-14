import { useEffect, useState } from "react"
import s from "./CountryDetails.module.css"

const CountryDetails = () => {
    const [countryDetails, setCountryDetails] = useState({})
    useEffect(()=>{
        setCountryDetails(JSON.parse(localStorage.getItem('country')))
        // setCountryDetails(countryDetails.languages = Object.values(countryDetails.languages).join(','))
    },[])
    console.log(countryDetails.languages);
    return (
        <>
        
        <div className={s.countryDetails}>
        <img src={countryDetails.flag} alt="" />
        <div className={s.countryDetailsBlock}>
            <h2>{countryDetails.name}</h2>
            {/* <span>Native Name: {countryDetails.name.nativeName}</span> */}
            <span>Population: {countryDetails.population}</span>
            <span>Region: {countryDetails.region}</span>
            <span>Sub Region: {countryDetails.subregion}</span>
            <span>Capital: {countryDetails.capital}</span>
            <span>Top Level Domain: {countryDetails.tld.toString()}</span>
            {/* <span>Languages: {countryDetails.languages}</span> */}
        </div>
        </div>
        </>
    )
}

export default CountryDetails