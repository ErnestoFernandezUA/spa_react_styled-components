import { FunctionComponent, useState } from "react";
import { List } from '../components/List';
import { Country } from '../type/Country';
import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import { Flag } from "../components/Flag";

export const FlagsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const countries = useRouteLoaderData("root") as Country[];
  const [filteredCountries, setFilteredCountries] = useState(countries);

  // const handleSearch = useCallback((search: string, region?: string) => {
  //   let data = [...countries];

  //   if (region) {
  //     data = data.filter(c => c.region.includes(region));
  //   }

  //   if (search) {
  //     data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  //   }

  //   setFilteredCountries(data);
  // }, [countries]);

  return (
    <>
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
              <Flag
                key={c.name}
                onClick={() => { navigate(`../country/${c.name}`) }}
                {...countryInfo} 
              />
            )
          })
        }
      </List>
    </>
  );
} 
