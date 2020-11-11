import React, { useState } from "react";
import CountrySubForm from "./ChildCountrySub";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import { postCountrySub } from "../../services/SubscriptionService";
import ErrorMessage from "./ErrorMessage";

export default function CountrySub() {
  const countryList = useCountriesDropdown();
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countryEmail, setCountryEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const country = e.target.value;
    setCountry(country);
  };

  const handleCountryEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target;
    //setData({ ...data, [name]: value });
    const countryEmail = e.target.value;
    return setCountryEmail(countryEmail);
  };

  const handleCountrySubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    let obj = {
      email: countryEmail,
      country,
    };
    //if (countryEmail === "" || countryEmail === undefined) return;

    try {
      setLoading(true);
      const result = await postCountrySub(obj);
      setCountryEmail("");
      setCountry("");
      setValue(result.data);
      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <>
      <CountrySubForm
        countryLabel="Email"
        selectLabel="Country"
        handleFieldChange={handleFieldChange}
        selectValue={country}
        countryList={countryList}
        placeholder="Insert Email"
        onChange={handleCountryEmail}
        value={countryEmail}
        onSubmit={handleCountrySubmit}
        title="Subscribe for alerts on a specific Country"
        errors={
          <ErrorMessage
            title="Danger!"
            error="That email might be invalid or you are already subbed for that country!"
          />
        }
      />

      {loading && <span>Loading...</span>}
    </>
  );
}
