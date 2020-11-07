import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import CustomNavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import formatISO from "date-fns/formatISO";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomDoubleDatePicker from "../../components/DatePicker/DoubleDatePicker";
import CustomWIPTotalTitle from "../../components/SummaryTitle/CustomWIPTotalTitle";
import { CountrySummary } from "../../Interface/CountrySummary";

export default function LiveAfterDate() {
  const [selectedFromDate, setSelectedFromDate] = React.useState("");
  const [selectedToDate, setSelectedToDate] = React.useState("");

  const [inputFromValue, setInputFromValue] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const [inputToValue, setInputToValue] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const url = `${process.env.REACT_APP_BASE_URL}/wip/total/date?from=${selectedFromDate}&to=${selectedToDate}`;
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

  const dataSource = {
    labels: ["Total cases around the world since day one"],
    datasets: [
      {
        label: "Total Recovered",
        backgroundColor: "rgba(41, 241, 195, 1)",
        borderColor: "rgba(41, 241, 195, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(41, 241, 195, 1)",
        hoverBorderColor: "rgba(41, 241, 195, 1)",
        data:
          !selectedFromDate && !selectedToDate
            ? null
            : data[0].name.map((n: CountrySummary) => n.TotalRecovered),
      },
      {
        label: "Total Confirmed",
        backgroundColor: "rgba(240, 240, 214, 1)",
        borderColor: "rgba(240, 240, 214, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(240, 240, 214, 1)",
        hoverBorderColor: "rgba(240, 240, 214, 1)",
        data:
          !selectedFromDate && !selectedToDate
            ? null
            : data[0].name.map((n: CountrySummary) => n.TotalConfirmed),
      },
      {
        label: "Total Deaths",
        backgroundColor: "rgba(226, 106, 106, 1)",
        borderColor: "rgba(226, 106, 106, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(226, 106, 106, 1)",
        hoverBorderColor: "rgba(226, 106, 106, 1)",
        data:
          !selectedFromDate && !selectedToDate
            ? null
            : data[0].name.map((n: CountrySummary) => n.TotalDeaths),
      },
      {
        label: "New Deaths",
        backgroundColor: "rgba(240, 52, 52, 1)",
        borderColor: "rgba(240, 52, 52, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(240, 52, 52, 1)",
        hoverBorderColor: "rgba(240, 52, 52, 1)",
        data:
          !selectedFromDate && !selectedToDate
            ? null
            : data[0].name.map((n: CountrySummary) => n.NewDeaths),
      },
      {
        label: "New Confirmed",
        backgroundColor: "rgba(233, 212, 96, 1)",
        borderColor: "rgba(233, 212, 96, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(233, 212, 96, 1)",
        hoverBorderColor: "rgba(233, 212, 96, 1)",
        data:
          !selectedFromDate && !selectedToDate
            ? null
            : data[0].name.map((n: CountrySummary) => n.NewConfirmed),
      },
      {
        label: "New Recovered",
        backgroundColor: "rgba(42, 187, 155, 1)",
        borderColor: "rgba(42, 187, 155, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(42, 187, 155, 1)",
        hoverBorderColor: "rgba(42, 187, 155, 1)",
        data:
          !selectedFromDate && !selectedToDate
            ? null
            : data[0].name.map((n: CountrySummary) => n.NewRecovered),
      },
    ],
  };

  return (
    <div>
      <CustomNavBar />
      <CustomContainer>
        <CustomSummaryTitle />
        <CustomWIPTotalTitle />
        <CustomDoubleDatePicker
          onChange={onChange}
          onClick={onClick}
          inputFromValue={inputFromValue}
          inputToValue={inputToValue}
          handleToDateChange={handleToDateChange}
          handleFromDateChange={handleFromDateChange}
          from={selectedFromDate}
          to={selectedToDate}
        />

        {data[0].name && (
          <>
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
      </CustomContainer>
    </div>
  );
}
