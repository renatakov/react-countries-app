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