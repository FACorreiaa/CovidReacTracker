import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import CustomDatePicker from "../../components/DatePicker/DatePicker";
import InputCountryForm from "../../components/InputCountry/InputCountry";
import CustomNavBar from "../../components/NavBar/NavBar";
import CustomTitle from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomInputDatePicker from "../../components/DatePicker/InputDatePicker";
import formatISO from "date-fns/formatISO";
import { Line } from "react-chartjs-2";
import { ILiveData } from "../../Interface/LiveData";
import { format } from "date-fns";
import { parseISO } from "date-fns/fp";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";

export default function CountryTotalPage() {
  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/country/total/${country}`;
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

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const dataSource = {
    labels: !country
      ? null
      : data[0].name.map((n: ILiveData) => format(parseISO(n.Date), "PPPP")),
    datasets: [
      {
        label: "Active",
        backgroundColor: "rgba(240, 240, 214, 1)",
        borderColor: "rgba(247, 202, 24, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(240, 240, 214, 1)",
        hoverBorderColor: "rgba(247, 202, 24, 1)",
        data: !country ? null : data[0].name.map((n: ILiveData) => n.Active),
      },
      {
        label: "Recovered",
        backgroundColor: "rgba(41, 241, 195, 1)",
        borderColor: "rgba(123, 239, 178, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(41, 241, 195, 1)",
        hoverBorderColor: "rgba(123, 239, 178, 1)",
        data: !country ? null : data[0].name.map((n: ILiveData) => n.Recovered),
      },
      {
        label: "Deaths",
        backgroundColor: "rgba(224, 130, 131, 1)",
        borderColor: "rgba(246, 36, 89, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(224, 130, 131, 1)",
        hoverBorderColor: "rgba(246, 36, 89, 1)",
        data: !country ? null : data[0].name.map((n: ILiveData) => n.Deaths),
      },
      {
        label: "Confirmed",
        backgroundColor: "rgba(154, 18, 179, 1)",
        borderColor: "rgba(190, 144, 212,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(154, 18, 179, 1)",
        hoverBorderColor: "rgba(190, 144, 212,1)",
        data: !country ? null : data[0].name.map((n: ILiveData) => n.Confirmed),
      },
    ],
  };

  return (
    <div>
      <CustomNavBar />
      <CustomContainer>
        <CustomSummaryTitle />
        <CustomCountryTitle country={country} />

        <InputCountryForm
          myRef={value}
          onChange={onChange}
          onClick={onClick}
          label={"Insert Country"}
        />
        {country.length && data[0].name && (
          <>
            <CustomTitle title={country} />
            <Line
              data={dataSource}
              width={150}
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