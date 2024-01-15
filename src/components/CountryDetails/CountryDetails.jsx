import { useEffect, useState } from "react"
import s from "./CountryDetails.module.css"

const CountryDetails = () => {
    const [countryDetails, setCountryDetails] = useState({})
    useEffect(()=>{
        setCountryDetails(JSON.parse(localStorage.getItem('country')))
    },[])
    console.log(countryDetails);
    return (
        <>
        
        <div className={s.countryDetails}>
        <img src={countryDetails.flag} alt="" />
        <div className={s.countryDetailsBlock}>
            <h2>{countryDetails.name}</h2>
            <span>Native Name: {countryDetails.nativeName}</span>
            <span>Population: {countryDetails.population}</span>
            <span>Region: {countryDetails.region}</span>
            <span>Sub Region: {countryDetails.subregion}</span>
            <span>Capital: {countryDetails.capital}</span>
            <span>Top Level Domain: {countryDetails.tld}</span>
            {countryDetails.currencies && countryDetails.currencies.length !== 0 ?
            <span>Currencies: {countryDetails.currencies} </span> : null}
            <span>Languages: {countryDetails.languages}</span>
            {countryDetails.borderCountries && countryDetails.borderCountries.length !== 0 ?
            <span>Border Countries: {countryDetails.borderCountries}</span> : null}
            
        </div>
        </div>
        </>
    )
}

export default CountryDetails