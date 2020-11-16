import React, { useState } from "react";
import useSWR, { mutate } from "swr";
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
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomFormCountryDates from "../../components/Form/FormCountryDates";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import { getNumberOfDays } from "../../function/numberOfDays";

export default function CountryCasesBetweenDates() {
  const countryList: any = useCountriesDropdown();

  const [selectedFromDate, setSelectedFromDate] = React.useState("");
  const [selectedToDate, setSelectedToDate] = React.useState("");
  const [valueFromDate, setValueFromDate] = React.useState(new Date());
  const [valueToDate, setValueToDate] = React.useState(new Date());
  const [country, setCountry] = useState("");

  const url = `${process.env.REACT_APP_BASE_URL}/country/live/${country}/date/?from=${selectedFromDate}&to=${selectedToDate}`;
  const { data, error } = useSWR(url, fetcher);

  let value = React.useRef("");

  const onClick = () => {
    const fromIsoDate = formatISO(valueFromDate);
    const toIsoDate = formatISO(valueToDate);
    setSelectedToDate(toIsoDate);
    setSelectedFromDate(fromIsoDate);
    setCountry(value.current);

    mutate(data, false);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const country = e.target.value;
    value.current = e.target.value;
    console.log(country);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    value.current = e.target.value;
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  const onFromChange = (date: Date) => {
    setValueFromDate(date);
  };

  const onToChange = (date: Date) => {
    setValueToDate(date);
  };

  const dataSource = {
    labels:
      !selectedFromDate && !selectedToDate
        ? null
        : getNumberOfDays(valueFromDate, valueToDate),
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
        {!country ? "" : <CustomCountryTitle country={country} />}
        <CustomSummaryTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        <CustomFormCountryDates
          handleFieldChange={handleFieldChange}
          selectValue={country}
          countryList={countryList}
          onChange={onChange}
          myRef={value}
          onFromChange={onFromChange}
          valueFromDate={valueFromDate}
          onToChange={onToChange}
          valueToDate={valueToDate}
          onClick={onClick}
          id="country"
          type="country"
        />
      </CustomSecondaryContainer>

      {country.length && data[0].name && (
        <CustomSecondaryContainer>
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
