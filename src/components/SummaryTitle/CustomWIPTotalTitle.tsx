import React from "react";
import useSWR from "swr";
import CustomCard from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { getTotalList } from "../../services/SubscriptionService";
import { SummaryList } from "../../Interface/SummaryList";

const url = "/wip/total";

export default function CustomWIPTotalTitle() {
  const { data, error } = useSWR(url, getTotalList);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div className="py-5">
      <div className="h-full overflow-y-auto">
        <div className="container  mx-auto grid">
          {data.data.map((d: SummaryList) => (
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <article className="prose prose-sm lg:prose-sm">
                <h3>Total around the world</h3>
              </article>
              <CustomCard
                icon="text-blue-300 fas fa-check w-5 h-5 pr-2"
                title="Total Confirmed"
                value={d.TotalConfirmed}
              />
              <CustomCard
                icon="text-blue-300 fas fa-skull-crossbones w-5 h-5 pr-2"
                title="Total Deaths"
                value={d.TotalDeaths}
              />
              <CustomCard
                icon="text-blue-300 fas fa-heart w-5 h-5 pr-2"
                title="Total Recovered"
                value={d.TotalRecovered}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
