import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import formatISO from "date-fns/formatISO";
import { Line } from "react-chartjs-2";
import { format } from "date-fns";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomDoubleDatePicker from "../../components/DatePicker/DoubleDatePicker";
import CustomWIPTotalTitle from "../../components/SummaryTitle/CustomWIPTotalTitle";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomReactTailWindDatePicker from "../../components/DatePicker/CustomReactTailWindDatePicker";
import CustomFormButton from "../../components/Button/CustomFormButton";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomTitle from "../../components/Title/Title";

export default function LiveAfterDate() {
  const [selectedFromDate, setSelectedFromDate] = React.useState("");
  const [selectedToDate, setSelectedToDate] = React.useState("");
  const [valueFromDate, setValueFromDate] = React.useState(new Date());
  const [valueToDate, setValueToDate] = React.useState(new Date());

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
  //
  return (
    <div>
      <CustomSecondaryContainer>
        <CustomSummaryTitle />
        <CustomWIPTotalTitle />
      </CustomSecondaryContainer>

      <CustomSecondaryContainer>
        <div className="w-full max-w-xs">
          <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          </form>
        </div>
      </CustomSecondaryContainer>

      {data[0].name && (
        <CustomSecondaryContainer>
          <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <CustomTitle title="Around the world" />
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
