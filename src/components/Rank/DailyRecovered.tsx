import React from "react";
import useSWR from "swr";
import Loading from "../Loading/Loading";
import { Grid } from "@material-ui/core";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomList from "../List/List";
import { getTopTotalConfirmed } from "../../services/RankingService";
import { fetcher } from "../../services/config/http-common";

function DailyRecovered() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_BASE_URL}/countriessummary/top/new/recovered`,
    fetcher
  );
  let index = 1;
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  console.log("DATA", data);
  const result = data.map((res: any) => res.countrySummary);
  console.log("result", result);
  return (
    <Grid
      style={{ marginBottom: "1em", display: "inline-flex" }}
      direction="column"
      justify="center"
      alignItems="flex-end"
    >
      <h5 style={{ textAlign: "center" }}>Top 10 Total Confirmed Recovered</h5>
      {result.map((d: CountrySummary) => (
        <CustomList
          index={index++}
          country={d.Country}
          value={d.NewRecovered}
        />
      ))}
    </Grid>
  );
}

export default DailyRecovered;
