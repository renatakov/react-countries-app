import { useEffect, useState } from "react"
import s from "./CountryDetails.module.css"
import axios from "axios"

const CountryDetails = () => {
    const [countryDetails, setCountryDetails] = useState({})
    useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${localStorage.getItem("country").toLowerCase()}`)
        .then(data=>setCountryDetails(...data.data))
    }, [])
    console.log(countryDetails)
    return (
        <>
        
        <div className={s.countryDetails}>
        <img src={countryDetails.flags.png} alt="" />
        <div className={s.countryDetailsBlock}>
            <h2>{countryDetails.name.common}</h2>
            <span>Native Name: {countryDetails.name.nativeName.prs.common}</span>
        </div>
        </div>
        </>
    )
}

export default CountryDetails