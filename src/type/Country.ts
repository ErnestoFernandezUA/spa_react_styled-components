export type Country = {
  name: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital: string;
  altSpellings?: string[];
  region: string;
  subregion?: string;
  continent: string;
  population: number;
  latlng?: number[];
  demonym?: string;
  area?: number;
  gini?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: number;
  currencies?: [
    {
      code: string;
      name: string;
      symbol: string;
    }
  ],
  languages?: [
    {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }
  ],
  translations?: {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
  },
  flag: string;
  flags: { png: string; svg: string; };
  regionalBlocs?: [
    {
      acronym: string;
      name: string;
      otherNames: string[];
    },
    {
      acronym: string;
      name: string;
      otherAcronyms: string[];
      otherNames: string[];
    }
  ],
  cioc?: string;
  independent?: boolean;
}

// Example:
// {
//   "name": "Albania",
//   "topLevelDomain": [
//       ".al"
//   ],
//   "alpha2Code": "AL",
//   "alpha3Code": "ALB",
//   "callingCodes": [
//       "355"
//   ],
//   "capital": "Tirana",
//   "altSpellings": [
//       "AL",
//       "Shqipëri",
//       "Shqipëria",
//       "Shqipnia"
//   ],
//   "subregion": "Southern Europe",
//   "region": "Europe",
//   "population": 2837743,
//   "latlng": [
//       41,
//       20
//   ],
//   "demonym": "Albanian",
//   "area": 28748,
//   "gini": 33.2,
//   "timezones": [
//       "UTC+01:00"
//   ],
//   "borders": [
//       "MNE",
//       "GRC",
//       "MKD",
//       "UNK"
//   ],
//   "nativeName": "Shqipëria",
//   "numericCode": "008",
//   "flags": {
//       "svg": "https://flagcdn.com/al.svg",
//       "png": "https://flagcdn.com/w320/al.png"
//   },
//   "currencies": [
//       {
//           "code": "ALL",
//           "name": "Albanian lek",
//           "symbol": "L"
//       }
//   ],
//   "languages": [
//       {
//           "iso639_1": "sq",
//           "iso639_2": "sqi",
//           "name": "Albanian",
//           "nativeName": "Shqip"
//       }
//   ],
//   "translations": {
//       "br": "Albania",
//       "pt": "Albânia",
//       "nl": "Albanië",
//       "hr": "Albanija",
//       "fa": "آلبانی",
//       "de": "Albanien",
//       "es": "Albania",
//       "fr": "Albanie",
//       "ja": "アルバニア",
//       "it": "Albania",
//       "hu": "Albánia"
//   },
//   "flag": "https://flagcdn.com/al.svg",
//   "regionalBlocs": [
//       {
//           "acronym": "CEFTA",
//           "name": "Central European Free Trade Agreement"
//       }
//   ],
//   "cioc": "ALB",
//   "independent": true
// }