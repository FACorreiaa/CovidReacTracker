import React from "react";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomCard from "../../components/Card/Card";
import { FaFlag } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

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
                  <label className="italic">
                    Values for:
                    <span className="font-semibold  text-2xl">{d.Country}</span>
                    <FaFlag />
                  </label>
                  <CustomCard
                    icon={<FaCheck />}
                    title={"New Confirmed"}
                    value={d.NewConfirmed}
                  />
                  <CustomCard
                    icon={<FaSkullCrossbones />}
                    title={"New Deaths"}
                    value={d.NewDeaths}
                  />
                  <CustomCard
                    icon={<FaHeart />}
                    title={"New Recovered"}
                    value={d.NewRecovered}
                  />
                  <div></div>
                  <CustomCard
                    icon={<FaCheck />}
                    title={"Total Confirmed"}
                    value={d.TotalConfirmed}
                  />
                  <CustomCard
                    icon={<FaSkullCrossbones />}
                    title={"Total Deaths"}
                    value={d.TotalDeaths}
                  />
                  <CustomCard
                    icon={<FaHeart />}
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
