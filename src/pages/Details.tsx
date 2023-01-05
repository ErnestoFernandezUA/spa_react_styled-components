import { FunctionComponent } from "react";
import { useParams, useRouteLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
// import { IoArrowBack } from 'react-icons/io5';
import { Country } from "../type/Country";
import { getCountry } from "../api/country";
// import { Button } from "../components/Button";
import Info from "../components/Info";

export const Details: FunctionComponent = () => {
  // const navigate = useNavigate();
  let { name } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const countries = useRouteLoaderData("root") as Country[];

  useEffect(() => {
    const fetch = async (value: string) => {
      const response = await getCountry(value);

      setCountry(response[0]);
    };
    
    if (name) {
      fetch(name).catch(e => console.log(e));
    }
  }, [name])
  
  return (
    <div>
      {country && <Info {...country} countries={countries} />}
    </div>
  );
} 
