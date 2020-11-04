import { useEffect, useState } from "react";
import { getCountriesList } from "../services/SubscriptionService";

export default function useCountriesDropdown() {
  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    async function getCountryList() {
      const response = await getCountriesList();
      SetCountries(response.data);
    }
    getCountryList();
  }, []);
  return countries;
}
