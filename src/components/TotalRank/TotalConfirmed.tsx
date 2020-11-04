import React from "react";
import useSWR from "swr";
import getTopTotalRecovered from "../../services/RankingService";
import Loading from "../../components/Loading/Loading";
import { Grid } from "@material-ui/core";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomList from "../List/List";

function TotalConfirmed() {
  const { data, error } = useSWR(
    "/countriessummary",
    getTopTotalRecovered.getTopTotalConfirmed
  );
  let index = 0;
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  console.log("DATA", data);
  const result = data.data.map((res: any) => res.countrySummary);
  console.log("result", result);
  return (
    <Grid
      style={{ marginBottom: "1em", display: "inline-flex" }}
      direction="column"
      justify="center"
      alignItems="flex-end"
    >
      <h5 style={{ textAlign: "center" }}>
        Covid 19 Top 10 Total Confirmed Cases
      </h5>
      {result.map((d: CountrySummary) => (
        <CustomList
          country={`${(index += 1)} - ` + d.Country}
          value={d.TotalConfirmed}
        />
      ))}
    </Grid>
  );
}

export default TotalConfirmed;
