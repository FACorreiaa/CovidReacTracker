import React from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { Bar } from "react-chartjs-2";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import { CountrySummary } from "../../Interface/CountrySummary";
export default function SummaryNewRecovered() {
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/new/recovered`;
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  //format(parseISO(`${d.createdAt}`), "PPPPpppp")rgba(207, 0, 15, 1)
  const dataSource = {
    labels: !data[0]
      ? null
      : data[0].countrySummary.map((n: CountrySummary) => n.Country),
    datasets: [
      {
        label: "New Recovered",
        backgroundColor: "rgba(150, 40, 27, 1)",
        borderColor: "rgba(207, 0, 15, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(150, 40, 27, 1)",
        hoverBorderColor: "rgba(207, 0, 15, 1)",
        data: !data[0]
          ? null
          : data[0].countrySummary.map((n: CountrySummary) => n.NewRecovered),
      },
    ],
  };
  return (
    <div>
      <CustomSecondaryContainer>
        <CustomSummaryTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        {console.log(data)}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <Bar
            data={dataSource}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true,
            }}
          />
        </div>
      </CustomSecondaryContainer>
    </div>
  );
}
