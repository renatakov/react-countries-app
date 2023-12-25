import s from "./Main.module.css"
import SearchBar from "../SearchBar/SearchBar";

const Main = () => {
    return (
        <main>
            <div className={s.block1}>

                <SearchBar />
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

        </main>
    )
}

export default Main;