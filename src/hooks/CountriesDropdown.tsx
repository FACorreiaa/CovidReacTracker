import { useEffect, useState } from "react";
import generalSubs from "../services/SubscriptionService";

export default function CountriesDropdown() {
  const initCountries = {
    countries: [],
  };

  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    async function getCountryList() {
      const response = await generalSubs.getCountriesList();
      console.log(response);
      SetCountries(response.data);
    }
    getCountryList();
  }, []);
  return countries;
}
