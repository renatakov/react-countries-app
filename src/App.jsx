import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import s from "./App.css"
const App = () => {
  return (
    <>
    <BrowserRouter basename="/react-countries-app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/countryDetails" element={<CountryDetails />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
