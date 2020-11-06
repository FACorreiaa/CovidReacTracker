import React from "react";
import useSWR from "swr";
import { format, parseISO } from "date-fns";
import CustomCard from "../../components/Card/Card";
import { Grid } from "@material-ui/core";
import Loading from "../../components/Loading/Loading";
import CustomTitle from "../../components/Title/Title";
import { getSummaryList } from "../../services/SubscriptionService";
import { SummaryList } from "../../Interface/SummaryList";

const url = "/summary";

export default function CustomSummaryTitle() {
  const { data, error } = useSWR(url, getSummaryList);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div>
      {data.data.map((d: SummaryList) => (
        <>
          <h2>{format(parseISO(`${d.createdAt}`), "PPPPpppp")}:</h2>
          <h5>Around the world</h5>
          <Grid
            style={{ marginBottom: "1em" }}
            container
            direction="row-reverse"
            justify="center"
            alignItems="flex-start"
          >
            <CustomCard
              icon="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"
              title="New Confirmed"
              value={d.NewConfirmed}
            />
            <CustomCard
              icon="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
              title="New Deaths"
              value={d.NewDeaths}
            />
            <CustomCard
              icon="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"
              title="New Recovered"
              value={d.NewRecovered}
            />
          </Grid>
        </>
      ))}
    </div>
  );
}
