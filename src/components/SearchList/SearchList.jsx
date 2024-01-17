import s from "./SearchList.module.css"
import Country from "../Country/Country"

const SearchList = (props)=>{
    console.log(props.list)
    let SearchCollection = () => {
        return props.list.map((country) => {
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
    return(
        <>
        
        {SearchCollection()}
        </>
    )
}

export default SearchList;