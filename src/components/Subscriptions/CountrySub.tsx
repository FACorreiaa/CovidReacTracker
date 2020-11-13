import React, { useState } from "react";
import CountrySubForm from "./ChildCountrySub";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import { postCountrySub } from "../../services/SubscriptionService";
import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";

export default function CountrySub() {
  const countryList = useCountriesDropdown();
  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countryEmail, setCountryEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleSubmit } = useForm();

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const country = e.target.value;
    console.log(country);
    setCountry(country);
  };

  const handleCountryEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target;
    //setData({ ...data, [name]: value });
    const countryEmail = e.target.value;
    console.log(countryEmail);

    return setCountryEmail(countryEmail);
  };

  const handleCountrySubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    //e.preventDefault();
    let obj = {
      email: countryEmail,
      country,
    };
    //if (countryEmail === "" || countryEmail === undefined) return;

    try {
      setLoading(true);
      await postCountrySub(obj);
      console.log(obj);
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
      />

      {loading && <span>Loading...</span>}
    </>
  );
}
