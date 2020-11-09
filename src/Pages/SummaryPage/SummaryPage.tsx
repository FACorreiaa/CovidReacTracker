import React from "react";
import useSWR from "swr";
import { format, parseISO } from "date-fns";
import { CustomContainer } from "../../components/Container/Container";
import CustomCard from "../../components/Card/Card";
import { Grid } from "@material-ui/core";
import Loading from "../../components/Loading/Loading";
import CustomTitle from "../../components/Title/Title";
import { getSummaryList } from "../../services/SubscriptionService";
import { SummaryList } from "../../Interface/SummaryList";
import CustomLandingCard from "../../components/Landing/CustomLandingCard";
import SummaryPageList from "../../components/SummaryPage/SummaryPageList";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";

const url = "/summary";

function SummaryPage() {
  const { data, error } = useSWR(url, getSummaryList);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div className="container mx-auto">
      {data.data.map((d: SummaryList) => (
        <>
          <br />
          <SummaryPageList
            title="Covid 19 Daily Summary"
            date={format(parseISO(`${d.createdAt}`), "PPPPpppp")}
            newConfirmed={d.NewConfirmed.toString()}
            newDeaths={d.NewDeaths.toString()}
            newRecovered={d.NewRecovered.toString()}
            totalConfirmed={d.TotalConfirmed.toString()}
            totalDeaths={d.TotalDeaths.toString()}
            totalRecovered={d.TotalRecovered.toString()}
          />
        </>
      ))}
    </div>
  );
}

export default SummaryPage;
