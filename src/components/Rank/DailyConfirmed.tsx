import React from "react";
import useSWR from "swr";
import Loading from "../Loading/Loading";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomList from "../List/List";
import { fetcher } from "../../services/config/http-common";

function DailyConfirmed() {
  const { data, error } = useSWR(
    `${process.env.REACT_APP_BASE_URL}/countriessummary/top/new/confirmed`,
    fetcher
  );
  let index = 1;
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  const result = data.map((res: any) => res.countrySummary);
  return (
    <div className="flex flex-col">
      <h5 className="text-center font-bold">Top 10 Today Confirmed Cases</h5>
      {result.map((d: CountrySummary) => (
        <CustomList
          index={index++}
          country={d.Country}
          value={d.NewConfirmed}
        />
      ))}
    </div>
  );
}

export default DailyConfirmed;
