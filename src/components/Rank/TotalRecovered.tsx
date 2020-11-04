import React from "react";
import useSWR from "swr";
import Loading from "../Loading/Loading";
import { Grid } from "@material-ui/core";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomList from "../List/List";
import { fetcher } from "../../services/config/http-common";

function TotalRecovered() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_BASE_URL}/countriessummary/top/total/recovered`,
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
      alignItems="flex-start"
    >
      <h5 style={{ textAlign: "center" }}>Covid 19 Top 10 Total Recovered</h5>
      {result.map((d: CountrySummary) => (
        <CustomList
          index={index++}
          country={d.Country}
          value={d.TotalRecovered}
        />
      ))}
    </Grid>
  );
}

export default TotalRecovered;
