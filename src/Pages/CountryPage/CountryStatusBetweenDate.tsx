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
import { ICountryStatus } from "../../Interface/CountryStatus";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomFormCountryStatusDates from "../../components/Form/FormCountryStatusDates";

export default function LiveAfterDate() {
  const [selectedFromDate, setSelectedFromDate] = React.useState("");
  const [selectedToDate, setSelectedToDate] = React.useState("");
  const [valueFromDate, setValueFromDate] = React.useState(new Date());
  const [valueToDate, setValueToDate] = React.useState(new Date());
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
  const onClick = () => {
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

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const status = e.target.value;
    setStatus(status);
  };

  const dataSource = {
    labels:
      country === "" || !data[0]
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
        data:
          country === "" || !data[0]
            ? null
            : data[0].name.map((n: ICountryStatus) => n.Cases),
      },
    ],
  };

  return (
    <div>
      {/**
       * <CustomSecondaryContainer>
        <CustomSummaryTitle />
        <CustomCountryTitle country={country} />
      </CustomSecondaryContainer>
       * 
       */}

      <CustomSecondaryContainer>
        {!country ? "" : <CustomCountryTitle country={country} />}
        <CustomSummaryTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        <CustomFormCountryStatusDates
          for="country"
          handleFieldChange={handleFieldChange}
          onFromChange={onFromChange}
          valueFromDate={valueFromDate}
          valueToDate={valueToDate}
          onToChange={onToChange}
          myRef={value}
          onChange={onChange}
          onClick={onClick}
          type="text"
          id="country"
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
