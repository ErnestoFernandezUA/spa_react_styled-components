import { client } from '../utils/axiosClient';
import { Country, CountryHalf } from '../type/Country';

export const getAllCountry = () => client.get<Country[]>(`all`);
export const getAllCountryHalf = () => client.get<CountryHalf[]>(`all?fields=name,capital,flags,population,region`);
export const getCountry = (country: string) => client.get<Country>(`name/${country}`);

export const getCountryByCode = (codes: number[]) => client.get<Country[]>(`alpha?codes=${codes.join(',')}`);
