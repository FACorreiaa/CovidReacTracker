import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import CustomNavBar from "../../components/NavBar/NavBar";
import CustomTitle from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import { Line } from "react-chartjs-2";
import { ILiveData } from "../../Interface/LiveData";
import { format } from "date-fns";
import { parseISO } from "date-fns/fp";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import InputCountryStatus from "../../components/InputCountry/InputCountryStatus";
import { ICountryStatus } from "../../Interface/CountryStatus";

export default function CountryStatus() {
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const url = `${process.env.REACT_APP_BASE_URL}/country/${country}/status/${status}`;
  const { data, error } = useSWR(url, fetcher);

  let value = React.useRef("");

  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCountry(value.current);
    mutate(data, false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    value.current = e.target.value;
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.value;
    setStatus(status);
    mutate(data, false);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const dataSource = {
    labels: !country
      ? null
      : data[0].name.map((n: ILiveData) => format(parseISO(n.Date), "PPPP")),
    datasets: [
      {
        label: "Cases",
        backgroundColor: "rgba(224, 130, 131, 1)",
        borderColor: "rgba(246, 36, 89, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(224, 130, 131, 1)",
        hoverBorderColor: "rgba(246, 36, 89, 1)",
        data: !country
          ? null
          : data[0].name.map((n: ICountryStatus) => n.Cases),
      },
    ],
  };

  return (
    <div>
      <CustomNavBar />
      <CustomContainer>
        <CustomSummaryTitle />
        <CustomCountryTitle country={country} />

        <InputCountryStatus
          labelId="input-status-id"
          id="input-status"
          myRef={value}
          onChange={onChange}
          onClick={onClick}
          label={"Insert Country Name"}
          value={status}
          handleFieldChange={handleFieldChange}
        />
        {country.length && data[0].name && (
          <>
            <CustomTitle title={country} />
            <Line
              data={dataSource}
              width={200}
              height={50}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </>
        )}
        {console.log("datadatadata", data)}
      </CustomContainer>
    </div>
  );
}
