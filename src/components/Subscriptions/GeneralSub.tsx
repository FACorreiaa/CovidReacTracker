import React, { useState } from "react";
import { postGeneralSub } from "../../services/SubscriptionService";
import GeneralSubForm from "./ChildGeneralSub";

export default function GeneralSub() {
  const initData = {
    email: "",
  };

  const initResponse = {
    data: true,
  };

  //General
  const [data, setData] = useState(initData);
  const [, setRes] = useState(initResponse);
  const [loading, setLoading] = useState(false);
  const handleGeneralEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const { name, value } = e.target;
    //setData({ ...data, [name]: value });
    const email = e.target.value;
    return setData({ email });
  };

  const handleGeneralSubmit = async () => {
    //e.preventDefault();

    let obj = {
      email: data.email,
    };

    //if (data.email === "" || data.email === undefined) return;

    try {
      setLoading(true);
      const result = await postGeneralSub(obj);
      setData({ email: result.data.email });
      setRes({ data: result.data });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <GeneralSubForm
        placeholder="Insert Email"
        onChange={handleGeneralEmail}
        value={data.email}
        onSubmit={handleGeneralSubmit}
        label="Insert email for daily general alerts"
      />

      {loading && <span>Loading...</span>}
    </>
  );
}
