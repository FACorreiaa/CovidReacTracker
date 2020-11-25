import React from "react";
import useSWR from "swr";
import CustomCard from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { getSummaryList } from "../../services/SubscriptionService";
import { SummaryList } from "../../Interface/SummaryList";

const url = "/summary";

export default function CustomSummaryTitle() {
  const { data, error } = useSWR(url, getSummaryList);
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div className="py-5">
      <div className="h-full overflow-y-auto">
        <div className="container  mx-auto grid">
          {data.data.map((d: SummaryList) => (
            <>
              <div className="flex text-center mb-4">
                <div className="w-full  h-12">
                  <label className="font-semibold">
                    New Around the world{" "}
                    <i className="text-blue-300 fas fa-globe"></i>
                  </label>
                </div>
              </div>
              <div className="text-center grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <CustomCard
                  icon="text-blue-300 fas fa-check w-5 h-5 pr-2"
                  title="New Confirmed"
                  value={d.NewConfirmed}
                />
                <CustomCard
                  icon="text-blue-300 fas fa-skull-crossbones w-5 h-5 pr-2"
                  title="New Deaths"
                  value={d.NewDeaths}
                />
                <CustomCard
                  icon="text-blue-300 fas fa-heart w-5 h-5 pr-2"
                  title="New Recovered"
                  value={d.NewRecovered}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
