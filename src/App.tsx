import { Header } from './components/Header';
import { Main } from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import { Country } from './type/Country';
import { useEffect, useState } from 'react';
import { getAllCountry } from './api/country';


function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getAllCountry();
      
      setCountries(response);
    }

    fetch().catch(e => console.log(e));

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
          <Route path="/country/:name" element={
            <Details countries={countries} 
            />}
          />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
