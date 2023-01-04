import { client } from '../utils/axiosClient';
import { Country } from '../type/Country';

export const getAllCountry = () => client.get<Country[]>(`all`);
export const getAllCountryHalfProperties = (properties: string[]) => client.get<Country[]>(`all?fields=${properties.join(',')}`);
export const getAllCountryCasual = () => getAllCountryHalfProperties(['name','capital','flags','population','region']);

export const getCountry = (country: string) => client.get<Country[]>(`name/${country}`);
export const getCountryByCode = (codes: number[]) => client.get<Country[]>(`alpha?codes=${codes.join(',')}`);
