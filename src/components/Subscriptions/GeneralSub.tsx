import React, { useState } from "react";
import { GeneralSubForm } from "./ChildGeneralSub";
import { InfoSection } from "../../Pages/LandingPage/InfoSection";
import { CountrySubForm } from "./ChildCountrySub";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import {
  postCountrySub,
  postGeneralSub,
} from "../../services/SubscriptionService";

export default function GeneralSub() {
  const countryList = useCountriesDropdown();

  const initData = {
    email: "",
  };

  const initResponse = {
    data: true,
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
    return setData({ email });
  };

  const handleGeneralSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    let obj = {
      email: data.email,
    };
    if (data.email === "" || data.email === undefined) return;

    try {
      setLoading(true);
      const result = await postGeneralSub(obj);
      setData({ email: result.data.email });
      setRes({ data: result.data });
      setLoading(false);
    } catch (err) {
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
    </>
  );
}
