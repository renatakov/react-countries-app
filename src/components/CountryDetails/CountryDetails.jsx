import { useEffect, useState } from "react"
import s from "./CountryDetails.module.css"
import { useNavigate } from "react-router-dom"

const CountryDetails = () => {
    console.log(JSON.parse(localStorage.getItem('country')))
    let navigate = useNavigate()
    const [countryDetails, setCountryDetails] = useState({})
    useEffect(() => {
        if(localStorage.getItem('country')) setCountryDetails(JSON.parse(localStorage.getItem('country')));
    }, [])
    console.log(JSON.parse(localStorage.getItem('country')));
    function handleClick() {
        navigate('/')
    }
    return (
        <>
            <div style={{ fontFamily: 'inherit' }} className={s.countryDetails}>
                <button onClick={handleClick}>← Back</button>
                <img src={countryDetails.flag} alt="" />
                <div className={s.countryDetailsBlock}>
                    <h1>{countryDetails.name}</h1>
                    {countryDetails.nativeName && countryDetails.nativeName.length !== 0 ?
                        <span><strong>Native Name:</strong> {countryDetails.nativeName}</span> : null}
                    <span><strong>Population:</strong> {countryDetails.population}
                    </span>
                    <span><strong>Region: </strong>{countryDetails.region}</span>
                    {countryDetails.subregion && countryDetails.subregion.length !== 0 ?
                        <span><strong>Sub Region:</strong> {countryDetails.subregion}</span> : null}
                    {countryDetails.capital && countryDetails.borderCountries.length !== 0 ?
                        <span><strong>Capital:</strong> {countryDetails.capital}</span> : null}
                    <span><strong>Top Level Domain:</strong> {countryDetails.tld}</span>
                    {countryDetails.currencies && countryDetails.currencies.length !== 0 ?
                        <span><strong>Currencies:</strong> {countryDetails.currencies} </span> : null}
                    {countryDetails.languages && countryDetails.languages.length !== 0 ?
                        <span><strong>Languages:</strong> {countryDetails.languages}</span> : null}
                    {countryDetails.borderCountries && countryDetails.borderCountries.length !== 0 ?
                        <span><strong>Border Countries:</strong> {countryDetails.borderCountries}</span> : null}

                </div>
            </div>
        </>
    )
}

export default CountryDetails