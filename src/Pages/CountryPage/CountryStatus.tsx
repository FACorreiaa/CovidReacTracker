import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import { Line } from "react-chartjs-2";
import { ILiveData } from "../../Interface/LiveData";
import { format } from "date-fns";
import { parseISO } from "date-fns/fp";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import { ICountryStatus } from "../../Interface/CountryStatus";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import CustomFormCountryStatus from "../../components/Form/FormCountryStatus";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";

export default function CountryStatus() {
  const countryList: any = useCountriesDropdown();
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState("");

  const url = `${process.env.REACT_APP_BASE_URL}/country/${country}/status/${status}`;
  const { data, error } = useSWR(url, fetcher);

  let countryValue = React.useRef("");
  let statusValue = React.useRef("");
  const onClick = () => {
    setCountry(countryValue.current);
    setStatus(statusValue.current);
    mutate(data, false);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    statusValue.current = e.target.value;

    //mutate(data, false);
  };

  const handleCountryFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    countryValue.current = e.target.value;
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
        <CustomFormCountryStatus
          handlCountryFieldChange={handleCountryFieldChange}
          selectValue={country}
          countryList={countryList}
          handleFieldChange={handleFieldChange}
          onClick={onClick}
          for="status"
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
          </div>
        </CustomSecondaryContainer>
      )}
    </div>
  );
}
