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
            {/* <span>Native Name: {countryDetails.name.nativeName}</span> */}
            <span>Population: {countryDetails.population}</span>
            <span>Region: {countryDetails.region}</span>
            <span>Sub Region: {countryDetails.subregion}</span>
            <span>Capital: {countryDetails.capital}</span>
            <span>Top Level Domain: {countryDetails.tld}</span>
            <span>Languages: {countryDetails.languages}</span>
            <span>Border Countries: {countryDetails.borderCountries}</span>
        </div>
        </div>
        </>
    )
}

export default CountryDetails