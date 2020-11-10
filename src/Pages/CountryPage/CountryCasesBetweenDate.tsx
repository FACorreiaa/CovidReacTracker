import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
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
import { ICountryTotal } from "../../Interface/CountryStatus";
import InputCountryDate from "../../components/InputCountry/InputCountryDate";
import CustomFormButton from "../../components/Button/CustomFormButton";
import CustomReactTailWindDatePicker from "../../components/DatePicker/CustomReactTailWindDatePicker";
import CustomInputCountryForm from "../../components/Form/CustomInput";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";

export default function CountryCasesBetweenDates() {
  const [selectedFromDate, setSelectedFromDate] = React.useState("");
  const [selectedToDate, setSelectedToDate] = React.useState("");
  const [valueFromDate, setValueFromDate] = React.useState(new Date());
  const [valueToDate, setValueToDate] = React.useState(new Date());
  const [country, setCountry] = useState("");

  const url = `${process.env.REACT_APP_BASE_URL}/country/live/${country}/date/?from=${selectedFromDate}&to=${selectedToDate}`;
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

  const onFromChange = (date: Date) => {
    setValueFromDate(date);
    const isoDate = formatISO(date);
    setSelectedFromDate(isoDate);
  };

  const onToChange = (date: Date) => {
    setValueToDate(date);
    const isoDate = formatISO(date);
    setSelectedToDate(isoDate);
  };

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
        data: !country
          ? null
          : data[0].name.map((n: ICountryTotal) => n.Active),
      },
      {
        label: "Recovered",
        backgroundColor: "rgba(41, 241, 195, 1)",
        borderColor: "rgba(123, 239, 178, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(41, 241, 195, 1)",
        hoverBorderColor: "rgba(123, 239, 178, 1)",
        data: !country
          ? null
          : data[0].name.map((n: ICountryTotal) => n.Recovered),
      },
      {
        label: "Deaths",
        backgroundColor: "rgba(224, 130, 131, 1)",
        borderColor: "rgba(246, 36, 89, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(224, 130, 131, 1)",
        hoverBorderColor: "rgba(246, 36, 89, 1)",
        data: !country
          ? null
          : data[0].name.map((n: ICountryTotal) => n.Deaths),
      },
      {
        label: "Confirmed",
        backgroundColor: "rgba(154, 18, 179, 1)",
        borderColor: "rgba(190, 144, 212,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(154, 18, 179, 1)",
        hoverBorderColor: "rgba(190, 144, 212,1)",
        data: !country
          ? null
          : data[0].name.map((n: ICountryTotal) => n.Confirmed),
      },
    ],
  };

  return (
    <div>
      <CustomSecondaryContainer>
        <CustomCountryTitle country={country} />
        <CustomSummaryTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        <div className="w-full max-w-xs">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <CustomReactTailWindDatePicker
                label="from"
                for="from"
                onChange={onFromChange}
                selected={valueFromDate}
              />
              <CustomReactTailWindDatePicker
                label="to"
                for="to"
                onChange={onToChange}
                selected={valueToDate}
              />
              <CustomInputCountryForm
                for="country"
                id="country"
                type="text"
                placeholder="Insert Country"
                onChange={onChange}
                label="Insert Country"
                myRef={value}
              />
            </div>

            <div className="flex items-center justify-between">
              <CustomFormButton label="Submit" onClick={onClick} />
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </CustomSecondaryContainer>

      {country.length && data[0].name && (
        <CustomSecondaryContainer>
          <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <CustomTitle title={country} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <Line
              data={dataSource}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
              }}
            />
            {console.log(data)}
          </div>
        </CustomSecondaryContainer>
      )}
    </div>
  );
}
