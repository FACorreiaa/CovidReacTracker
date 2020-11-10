import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { CustomContainer } from "../../components/Container/Container";
import InputCountryForm from "../../components/InputCountry/InputCountry";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCard from "../../components/Card/Card";
import { Grid } from "@material-ui/core";

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
      <CustomContainer>
        <CustomSummaryTitle />
        <InputCountryForm
          myRef={value}
          onChange={onChange}
          onClick={onClick}
          label={"Insert Country"}
        />
        {country.length &&
          data.map((d: any) => {
            return (
              <>
                <h3>{d.Country}</h3>
                <Grid
                  style={{ marginBottom: "1em", display: "inline-flex" }}
                  direction="row"
                  justify="center"
                  alignItems="flex-end"
                >
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
                </Grid>
                <br />
                <Grid
                  style={{ marginBottom: "1em", display: "inline-flex" }}
                  direction="row"
                  justify="center"
                  alignItems="flex-end"
                >
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
                </Grid>
              </>
            );
          })}
      </CustomContainer>
    </div>
  );
}
