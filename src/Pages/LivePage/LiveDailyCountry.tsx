import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import InputCountryForm from "../../components/InputCountry/InputCountry";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCard from "../../components/Card/Card";
import { Grid } from "@material-ui/core";
import CustomFormButton from "../../components/Button/CustomFormButton";
import CustomInputCountryForm from "../../components/Form/CustomInput";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";

export default function LiveDailyCountry() {
  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/daily/country/${country}`;
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
  return (
    <div>
      <CustomSecondaryContainer>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
        <CustomSummaryTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        {country.length &&
          data.map((d: any) => {
            return (
              <>
                <h3>{d.Country}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  <CustomCard
                    icon={""}
                    title={"New Confirmed"}
                    value={d.NewConfirmed}
                  />
                  <CustomCard
                    icon={""}
                    title={"New Deaths"}
                    value={d.NewDeaths}
                  />
                  <CustomCard
                    icon={""}
                    title={"New Recovered"}
                    value={d.NewRecovered}
                  />
                </div>
                <br />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                  <CustomCard
                    icon={""}
                    title={"Total Confirmed"}
                    value={d.TotalConfirmed}
                  />
                  <CustomCard
                    icon={""}
                    title={"Total Deaths"}
                    value={d.TotalDeaths}
                  />
                  <CustomCard
                    icon={""}
                    title={"Total Recovered"}
                    value={d.TotalRecovered}
                  />
                </div>
              </>
            );
          })}
      </CustomSecondaryContainer>
    </div>
  );
}
