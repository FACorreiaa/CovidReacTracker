import React, { useState } from "react";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import formatISO from "date-fns/formatISO";
import { Line } from "react-chartjs-2";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomWIPTotalTitle from "../../components/SummaryTitle/CustomWIPTotalTitle";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import { ILiveData } from "../../Interface/LiveData";
import LiveAfterDateForm from "../../components/Form/LiveAfterDate";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import { getNumberOfDays } from "../../function/numberOfDays";

export default function LiveAfterDate() {
  const countryList: any = useCountriesDropdown();
  const [selectedDate, setSelectedDate] = React.useState("");
  const [inputValue, setInputValue] = useState(new Date());
  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/live/country/${country}/status/confirmed/date/${selectedDate}`;
  const { data, error } = useSWR(url, fetcher);
  let value = React.useRef("");

  const onClick = () => {
    const date = formatISO(inputValue);
    setSelectedDate(date);
    setCountry(value.current);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const country = e.target.value;
    value.current = e.target.value;
  };

  const onDateChange = (date: Date) => {
    setInputValue(date);
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  /*
  const handleFromDateChange = (date: string, value: any) => {
    setSelectedFromDate(formatISO(new Date(date)));
    setInputFromValue(value);
  };

  const handleToDateChange = (date: string, value: any) => {
    setSelectedToDate(formatISO(new Date(date)));
    setInputToValue(value);
  };*/

  const dataSource = {
    labels: !country ? null : getNumberOfDays(inputValue, new Date()),

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
      <CustomSecondaryContainer>
        <CustomSummaryTitle />
        <CustomWIPTotalTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        <LiveAfterDateForm
          handleFieldChange={handleFieldChange}
          selectValue={country}
          countryList={countryList}
          onAfterChange={onDateChange}
          valueAfterDate={inputValue}
          onClick={onClick}
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
          </div>
        </CustomSecondaryContainer>
      )}
    </div>
  );
}
