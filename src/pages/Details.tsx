import { FunctionComponent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Country } from "../type/Country";
import { getCountry } from "../api/country";

export const Details: FunctionComponent = () => {
  let { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetch = async (value: string) => {
      const response = await getCountry(value);
      console.log(response);

      setCountry(response);
    };

    if (name) {
      fetch(name).catch(e => console.log(e));
    }
  }, [name])


  return (
    <div onClick={() => navigate('/')}>
      <button><IoArrowBack/>Back</button>
      Details: {name}
    </div>
  );
} 
