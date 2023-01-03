import { useEffect, useState } from 'react';
import { getAllCountryHalf } from './api/country';
import Controls from './components/Controls';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { CountryHalf } from './type/Country';



function App() {
  const [countries, setCountries] = useState<CountryHalf[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getAllCountryHalf();
      
      setCountries(response);
    }

    fetch();

  }, [])

  console.log(countries);

  return (
    <>
      <Header />

      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
