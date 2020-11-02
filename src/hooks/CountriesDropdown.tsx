import { useEffect, useState } from "react";
import generalSubs from "../services/SubscriptionService";

export default function CountriesDropdown() {
  const [countries, SetCountries] = useState([]);

  useEffect(() => {
    async function getCountryList() {
      const response = await generalSubs.getCountriesList();
      SetCountries(response.data);
    }
    getCountryList();
  }, []);
  return countries;
}
