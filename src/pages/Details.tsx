import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Country } from "../type/Country";
import { getCountry } from "../api/country";
import { Button } from "../components/Button";
import Info from "../components/Info";

interface DetailsProps {
  countries: Country[];
}

export const Details: FunctionComponent<DetailsProps> = ({ countries }) => {
  let { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetch = async (value: string) => {
      const response = await getCountry(value);

      setCountry(response[0]);
    };
    
    if (name) {
      fetch(name).catch(e => console.log(e));
    }
  }, [name])
  
  console.log(country);

  return (
    <div>
      <Button 
        // onClick={() => navigate('/')}
        to={'/'}
      >
        <IoArrowBack/>
        Back
      </Button>

      {country && <Info {...country} countries={countries} />}
    </div>
  );
} 
