import React, { useState } from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { Line } from "react-chartjs-2";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomDayOneTemplate from "../../components/Form/DayOneForm";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import CustomWarningMessage from "../../components/ErrorMessages/WarningMessage";
import CountryData from "../../Interface/CountryData";
export default function CountryStatNewData() {
  const countryList: any = useCountriesDropdown();

  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/countrystats/country/data/${country}`;
  const { data, error, mutate } = useSWR(url, fetcher);

  let value = React.useRef("");
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const country = e.target.value;
    value.current = e.target.value;
  };
  /*const onClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCountry(value.current);
      setValues(data);
    },
    [data]
  );*/
  const onClick = () => {
    setCountry(value.current);
    mutate(data);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    value.current = e.target.value;
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  //format(parseISO(`${d.createdAt}`), "PPPPpppp")
  const dataSource = {
    labels: !country ? null : data[0].data.map((n: CountryData) => n.date),
    datasets: [
      {
        label: "New Cases Per Million",
        backgroundColor: "rgba(41, 241, 195, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(41, 241, 195, 1)",
        hoverBorderColor: "rgba(41, 241, 195, 1)",
        data: !country
          ? null
          : data[0].data.map((n: CountryData) => n.new_cases_per_million),
      },
      {
        label: "New Cases Smoothed Per Million",
        backgroundColor: "rgba(240, 240, 214, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(240, 240, 214, 1)",
        hoverBorderColor: "rgba(240, 240, 214, 1)",
        data: !country
          ? null
          : data[0].data.map(
              (n: CountryData) => n.new_cases_smoothed_per_million
            ),
      },
      {
        label: "New Deaths Smoothed Per Million",
        backgroundColor: "rgba(226, 106, 106, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(226, 106, 106, 1)",
        hoverBorderColor: "rgba(226, 106, 106, 1)",
        data: !country
          ? null
          : data[0].data.map(
              (n: CountryData) => n.new_deaths_smoothed_per_million
            ),
      },
      {
        label: "New Deaths Per Million",
        backgroundColor: "rgba(233, 212, 96, 1)",
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(233, 212, 96, 1)",
        hoverBorderColor: "rgba(233, 212, 96, 1)",
        data: !country
          ? null
          : data[0].data.map((n: CountryData) => n.new_deaths_per_million),
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
        <CustomDayOneTemplate
          handleFieldChange={handleFieldChange}
          selectValue={country}
          countryList={countryList}
          for="country"
          id="country"
          type="text"
          placeholder="Insert Country"
          onChange={onChange}
          label="Country"
          onClick={onClick}
        />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        {!country ? null : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            <Line
              data={dataSource}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
                responsive: true,
              }}
            />
          </div>
        )}
      </CustomSecondaryContainer>
    </div>
  );
}
