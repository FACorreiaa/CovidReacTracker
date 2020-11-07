import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import CustomNavBar from "../../components/NavBar/NavBar";
import CustomTitle from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import formatISO from "date-fns/formatISO";
import { Line } from "react-chartjs-2";
import { ILiveData } from "../../Interface/LiveData";
import { format } from "date-fns";
import { parseISO } from "date-fns/fp";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import InputCountryStatusDate from "../../components/InputCountry/InputCountryStatusDate";
import { ICountryStatus } from "../../Interface/CountryStatus";

export default function LiveAfterDate() {
  const [selectedFromDate, setSelectedFromDate] = React.useState("");
  const [inputFromValue, setInputFromValue] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const [selectedToDate, setSelectedToDate] = React.useState("");
  const [inputToValue, setInputToValue] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const url = `${process.env.REACT_APP_BASE_URL}/country/total/${country}/status/${status}/date/live?from=${selectedFromDate}&to=${selectedToDate}`;
  const { data, error } = useSWR(url, fetcher);

  let value = React.useRef("");

  /*const onClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCountry(value.current);
      setValues(data);
    },
    [data]
  );*/
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

  const handleFromDateChange = (date: string, value: any) => {
    setSelectedFromDate(formatISO(new Date(date)));
    setInputFromValue(value);
  };

  const handleToDateChange = (date: string, value: any) => {
    setSelectedToDate(formatISO(new Date(date)));
    setInputToValue(value);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const status = e.target.value;
    setStatus(status);
  };

  const dataSource = {
    labels: !country
      ? null
      : data[0].name.map((n: ILiveData) => format(parseISO(n.Date), "PPPP")),
    datasets: [
      {
        label: "Deaths",
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
        <CustomTitle title="Pick a date and check all cases after that moment!" />
        <InputCountryStatusDate
          labelId="input-status-date-id"
          id="input-status-date"
          myRef={value}
          onChange={onChange}
          onClick={onClick}
          label={"Insert Country Name"}
          value={status}
          handleFieldChange={handleFieldChange}
          inputFromValue={inputFromValue}
          inputToValue={inputToValue}
          handleToDateChange={handleToDateChange}
          handleFromDateChange={handleFromDateChange}
          from={selectedFromDate}
          to={selectedToDate}
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
