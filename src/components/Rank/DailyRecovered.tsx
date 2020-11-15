import React from "react";
import useSWR from "swr";
import Loading from "../Loading/Loading";
import { CountrySummary } from "../../Interface/CountrySummary";
import CustomList from "../List/List";
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
    <div className="flex flex-col">
      <h5 className="text-center font-bold">
        Top 10 Total Confirmed Recovered
      </h5>
      {result.map((d: CountrySummary) => (
        <CustomList
          index={index++}
          country={d.Country}
          value={d.NewRecovered}
        />
      ))}
    </div>
  );
}

export default DailyRecovered;
