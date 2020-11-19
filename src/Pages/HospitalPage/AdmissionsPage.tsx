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
import ErrorMessage from "../../components/Subscriptions/ErrorMessage";
import { HospitalData } from "../../Interface/HospitalData";
export default function AdmissionsPage() {
  const countryList: any = useCountriesDropdown();

  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/hospital/country/admissions/${country}`;
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
    labels: !data[0] ? null : data[0].country.map((n: HospitalData) => n.Year),

    datasets: [
      {
        label: "Weekly New Hospital Admissions",
        backgroundColor: "rgba(20, 85, 118, 1)",
        borderColor: "rgba(20, 85, 118, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(20, 85, 118, 1)",
        hoverBorderColor: "rgba(20, 85, 118, 1)",
        data: !data[0]
          ? null
          : data[0].country.map(
              (n: HospitalData) => n.Weekly_new_hospital_admissions
            ),
      },
      {
        label: "Weely New ICU Admissions",
        backgroundColor: "rgba(85, 20, 118, 1)",
        borderColor: "rgba(85, 20, 118, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(85, 20, 118, 1)",
        hoverBorderColor: "rgba(85, 20, 118, 1)",
        data: !data[0]
          ? null
          : data[0].country.map(
              (n: HospitalData) => n.Weekly_new_ICU_admissions
            ),
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
        {!country && <CustomWarningMessage />}
        {country && !data[0] && (
          <ErrorMessage error="No ICU data about that country!" />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {data[0] && (
            <Line
              data={dataSource}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
              }}
            />
          )}
        </div>
      </CustomSecondaryContainer>
    </div>
  );
}
