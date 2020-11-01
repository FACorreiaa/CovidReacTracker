import React, { FunctionComponent, useState } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import postComments from "../../hooks/Post";
import { GeneralSubForm } from "./ChildGeneralSub";
import generalSubs from "../../services/SubscriptionService";
import { InfoSection } from "../../Layouts/LandingPage/InfoSection";
import { CountrySubForm } from "./ChildCountrySub";
import CountriesDropdown from "../../hooks/CountriesDropdown";

export default function CountrySub() {
  const isSubbed = <span>You are already Subbed!</span>;
  const countryList = CountriesDropdown();

  const initData = {
    email: "",
  };

  const initResponse = {
    data: true,
  };

  const initCountryList = {
    country: "",
  };

  //General
  const [data, setData] = useState(initData);
  const [res, setRes] = useState(initResponse);
  const [err, SetError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGeneralEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target;
    //setData({ ...data, [name]: value });
    const email = e.target.value;
    console.log(email);
    return setData({ email });
  };

  const handleGeneralSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    let obj = {
      email: data.email,
    };
    if (data.email === "" || data.email === undefined) return;

    console.log("obj", obj);
    try {
      setLoading(true);
      const result = await generalSubs.postGeneralSub(obj);
      console.log("result", result);
      setData({ email: result.data.email });
      setRes({ data: result.data });
      setLoading(false);
      console.log(result);
    } catch (err) {
      console.log(err);
      SetError(err);
      setLoading(false);
    }
  };

  //country

  const [country, setCountry] = useState("");
  const [value, setValue] = useState("");
  const [countryEmail, setCountryEmail] = useState("");
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const country = e.target.value;
    setCountry(country);
    console.log("COUNTRYRYRY", country);
  };

  const handleCountryEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target;
    //setData({ ...data, [name]: value });
    const countryEmail = e.target.value;
    console.log(countryEmail);
    return setCountryEmail(countryEmail);
  };

  const handleCountrySubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    let obj = {
      email: countryEmail,
      country,
    };
    if (countryEmail === "" || countryEmail === undefined) return;

    console.log("obj", obj);
    try {
      setLoading(true);
      const result = await generalSubs.postCountrySub(obj);
      console.log("result", result);
      setCountryEmail(result.data.email);
      setLoading(false);
      console.log(result);
    } catch (err) {
      console.log(err);
      SetError(err);
      setLoading(false);
    }
  };
  return (
    <>
      <InfoSection
        title="General subscription"
        paragraph="Subscribe to receive emails about daily total cases around the world!"
      >
        <GeneralSubForm
          placeholder="Insert Email"
          onChange={handleGeneralEmail}
          value={data.email}
          onSubmit={handleGeneralSubmit}
        />
        {loading && <span>Loading...</span>}
        {res.data === false && (
          <span style={{ color: "red" }}>You are already subbed</span>
        )}
      </InfoSection>
      <InfoSection
        title="Country subscription"
        paragraph="Subscribe to receive emails about daily cases on the countries you pick"
      >
        <CountrySubForm
          labelId="country-list"
          id="country"
          handleFieldChange={handleFieldChange}
          value={country}
          countryList={countryList}
        />
        {console.log("countryList", countryList)}
        {console.log("value", value)}

        <GeneralSubForm
          placeholder="Insert Email"
          onChange={handleCountryEmail}
          value={countryEmail}
          onSubmit={handleCountrySubmit}
        />
        {loading && <span>Loading...</span>}
        {!countryEmail && (
          <span style={{ color: "red" }}>You are already subbed</span>
        )}
        {console.log("countryEmail", countryEmail)}
      </InfoSection>
    </>
  );
}
