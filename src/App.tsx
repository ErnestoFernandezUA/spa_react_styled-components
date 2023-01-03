import { Header } from './components/Header';
import { Main } from './components/Main';
// import { Route, Switch } from "react-router";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { CountryHalf } from './type/Country';
import { useEffect, useState } from 'react';
import { getAllCountryHalf } from './api/country';


function App() {
  const [countries, setCountries] = useState<CountryHalf[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getAllCountryHalf();
      
      setCountries(response);
    }

    fetch();

  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={
            <HomePage 
              countries={countries} 
            />}
          />
          <Route path="/country/:name" element={<Details />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
