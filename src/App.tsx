import { useEffect, useState } from 'react';
import { getAllCountryHalf } from './api/country';
import { Card } from './components/Card';
import Controls from './components/Controls';
import { Header } from './components/Header';
import { List } from './components/List';
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

  return (
    <>
      <Header />

      <Main>
        <Controls />

        <List>
          {
            countries.map(c => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  }

                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => {}}
                  {...countryInfo} 
                />
              )
            })
          }
        </List>
      </Main>
    </>
  );
}

export default App;
