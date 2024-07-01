import React, { useRef } from "react";
import staticCountries from "@/constants/countries";

const Country = (country: { country: string; name: any; code: string; }) => {
  return {
    countryName: country.country.toLowerCase(),
    countryCode: country.name,
    flag: `https://flagcdn.com/${country.code.toLowerCase()}.svg`,
  };
};

const transformCountry = (arr: { country: string; name: any; code: string; }[]) => arr.map(Country);

export const useCountry = () => {
  const countries = useRef(transformCountry(staticCountries)).current;

  const [currentCountry, setCurrentCountry] = React.useState(
    countries.find((e) => e.countryName === "nigeria")
  );

  return {
    countries,
    currentCountry,
    setCurrentCountry,
  };
};
