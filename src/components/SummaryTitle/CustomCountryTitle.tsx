import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomCard from "../../components/Card/Card";

type Props = {
  country: string;
};
export default function CustomCountryTitle(props: Props) {
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/daily/country/${props.country}`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div className="py-5">
      <div className="h-full overflow-y-auto">
        <div className="container  mx-auto grid">
          {props.country.length &&
            data.map((d: any) => {
              return (
                <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                  <h3>{`Values for: ${d.Country}`}</h3>
                  <CustomCard
                    icon="fas fa-check w-5 h-5 pr-2"
                    title={"New Confirmed"}
                    value={d.NewConfirmed}
                  />
                  <CustomCard
                    icon="fas fa-skull-crossbones w-5 h-5 pr-2"
                    title={"New Deaths"}
                    value={d.NewDeaths}
                  />
                  <CustomCard
                    icon="fas fa-heart w-5 h-5 pr-2"
                    title={"New Recovered"}
                    value={d.NewRecovered}
                  />
                  <div></div>
                  <CustomCard
                    icon="fas fa-check w-5 h-5 pr-2"
                    title={"Total Confirmed"}
                    value={d.TotalConfirmed}
                  />
                  <CustomCard
                    icon="fas fa-skull-crossbones w-5 h-5 pr-2"
                    title={"Total Deaths"}
                    value={d.TotalDeaths}
                  />
                  <CustomCard
                    icon="fas fa-heart w-5 h-5 pr-2"
                    title={"Total Recovered"}
                    value={d.TotalRecovered}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
