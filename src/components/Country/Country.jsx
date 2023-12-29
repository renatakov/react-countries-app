import s from "./Country.module.css"

const Country = (props) => {
    return (
        <div className={s.country}>
            <img src={props.flag} alt="" />
            <div className={s.info}>
        <h3>{props.name}</h3>
        <span><strong>Population: </strong> {props.population}</span>
        <span><strong>Region: </strong> {props.region}</span>
        {props.capital !== undefined &&  
        <span><strong>Capital: </strong> {props.capital}</span>
        
        }
            </div>
        </div>
    )
}

export default Country