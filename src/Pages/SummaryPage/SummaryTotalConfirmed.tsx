import React from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { Doughnut } from "react-chartjs-2";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import { CountrySummary } from "../../Interface/CountrySummary";
import generateRandomColor from "../../function/generateRandomColors";
import CustomTitle from "../../components/SummaryTitle/CustomTitle";
export default function SummaryTotalConfirmed() {
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/total/confirmed`;
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
        backgroundColor: generateRandomColor(data[0].countrySummary),
        hoverBackgroundColor: generateRandomColor(data[0].countrySummary),
        data: !data[0]
          ? null
          : data[0].countrySummary.map((n: CountrySummary) => n.TotalConfirmed),
      },
    ],
  };

  return (
    <div>
      <CustomSecondaryContainer>
        <CustomTitle title="Total confirmed by Country" />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        <Doughnut
          data={dataSource}
          options={{
            maintainAspectRatio: true,
            responsive: true,
          }}
        />
      </CustomSecondaryContainer>
    </div>
  );
}
