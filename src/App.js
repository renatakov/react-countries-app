import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import { Routes, Route } from "react-router-dom";
import s from "./App.css"
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/countryDetails" element={<CountryDetails />}></Route>

      </Routes>


    </>
  )
}

export default App;
