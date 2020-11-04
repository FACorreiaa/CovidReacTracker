import React from "react";
import useSWR from "swr";
import Loading from "../Loading/Loading";
import { Grid } from "@material-ui/core";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomList from "../List/List";
import { getTopTotalDeaths } from "../../services/RankingService";
import { fetcher } from "../../services/config/http-common";

function TotalDeaths() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_BASE_URL}/countriessummary/top/total/deaths`,
    fetcher
  );
  let index = 0;
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  console.log("DATA", data);
  const result = data.map((res: any) => res.countrySummary);
  console.log("DEATHS", result);
  return (
    <Grid
      style={{ marginBottom: "1em", display: "inline-flex" }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <h5 style={{ textAlign: "center" }}>Covid 19 Top 10 Total Deaths</h5>
      {result.map((d: CountrySummary) => (
        <CustomList index={index++} country={d.Country} value={d.TotalDeaths} />
      ))}
    </Grid>
  );
}

export default TotalDeaths;
