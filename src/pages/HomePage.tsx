import { FunctionComponent, useEffect, useState } from "react";
import { Card } from '../components/Card';
import Controls from '../components/Controls';
import { List } from '../components/List';
import { CountryHalf } from '../type/Country';
import { useNavigate } from 'react-router-dom'

interface HomePageProps {
  countries: CountryHalf[];
}

export const HomePage: FunctionComponent<HomePageProps> = ({
  countries,  
 }) => {
  const navigate = useNavigate();
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries])

  console.log(filteredCountries);

  const handleSearch = (search: string, region?: string) => {
    let data = [...countries];

    console.log(data);


    if (region) {
      data = data.filter(c => c.region.includes(region));
    }

    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(data);
  };

  return (
    <>
      <Controls
        onSearch={handleSearch}
      />

      <List>
        {
          filteredCountries.map(c => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString('ru-RU'),
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
                onClick={() => { navigate(`country/${c.name}`) }}
                {...countryInfo} 
              />
            )
          })
        }
      </List>
    </>
  );
} 
