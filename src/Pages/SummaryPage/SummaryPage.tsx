import React from "react";
import useSWR from "swr";
import { format, parseISO } from "date-fns";
import Loading from "../../components/Loading/Loading";
import { getSummaryList } from "../../services/SubscriptionService";
import { SummaryList } from "../../Interface/SummaryList";
import SummaryPageList from "../../components/SummaryPage/SummaryPageList";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";

const url = "/summary";

function SummaryPage() {
  const { data, error } = useSWR(url, getSummaryList);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <CustomSecondaryContainer>
      <section className="flex justify-between p-container m-container">
        {data.data.map((d: SummaryList) => (
          <>
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
      </section>
    </CustomSecondaryContainer>
  );
}

export default SummaryPage;
