import React, { useState } from "react";
import { CustomContainer } from "../../components/Container/Container";
import InputCountryForm from "../../components/InputCountry/InputCountry";
import { fetcher } from "../../services/config/http-common";
import useSWR, { mutate } from "swr";
import Loading from "../../components/Loading/Loading";
import { IDayOne } from "../../Interface/Dayone";
import { Bar } from "react-chartjs-2";
import { format, parseISO } from "date-fns";
import CustomTitle from "../../components/Title/Title";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomButton from "../../components/Button/CustomButton";
import CustomInputCountryForm from "../../components/Form/CustomInput";
import CustomFormButton from "../../components/Button/CustomFormButton";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";

function DayOne() {
  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/dayone/all/total/country/${country}`;
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

  //format(parseISO(`${d.createdAt}`), "PPPPpppp")
  const dataSource = {
    labels: !country
      ? null
      : data[0].name.map((n: IDayOne) => format(parseISO(n.Date), "PPPP")),
    datasets: [
      {
        label: "Active",
        backgroundColor: "rgba(240, 240, 214, 1)",
        borderColor: "rgba(247, 202, 24, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(240, 240, 214, 1)",
        hoverBorderColor: "rgba(247, 202, 24, 1)",
        data: !country ? null : data[0].name.map((n: IDayOne) => n.Active),
      },
      {
        label: "Recovered",
        backgroundColor: "rgba(41, 241, 195, 1)",
        borderColor: "rgba(123, 239, 178, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(41, 241, 195, 1)",
        hoverBorderColor: "rgba(123, 239, 178, 1)",
        data: !country ? null : data[0].name.map((n: IDayOne) => n.Recovered),
      },
      {
        label: "Deaths",
        backgroundColor: "rgba(224, 130, 131, 1)",
        borderColor: "rgba(246, 36, 89, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(224, 130, 131, 1)",
        hoverBorderColor: "rgba(246, 36, 89, 1)",
        data: !country ? null : data[0].name.map((n: IDayOne) => n.Deaths),
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
            <Bar
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

export default DayOne;
