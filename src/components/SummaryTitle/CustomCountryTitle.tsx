import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomCard from "../../components/Card/Card";
import { Grid } from "@material-ui/core";

type Props = {
  country: string;
};
export default function CustomCountryTitle(props: Props) {
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/daily/country/${props.country}`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div>
      {props.country.length &&
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
    </div>
  );
}
