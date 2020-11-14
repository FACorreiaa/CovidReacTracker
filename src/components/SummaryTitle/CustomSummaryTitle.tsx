import React from "react";
import useSWR from "swr";
import CustomCard from "../../components/Card/Card";
import Loading from "../../components/Loading/Loading";
import { getSummaryList } from "../../services/SubscriptionService";
import { SummaryList } from "../../Interface/SummaryList";
import { FaCheck, FaSkullCrossbones, FaHeart } from "react-icons/fa";

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
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <label className="font-semibold">
                New Around the world <i className="fas fa-globe"></i>
              </label>

              <CustomCard
                icon={<FaCheck />}
                title="New Confirmed"
                value={d.NewConfirmed}
              />
              <CustomCard
                icon={<FaSkullCrossbones />}
                title="New Deaths"
                value={d.NewDeaths}
              />
              <CustomCard
                icon={<FaHeart />}
                title="New Recovered"
                value={d.NewRecovered}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
