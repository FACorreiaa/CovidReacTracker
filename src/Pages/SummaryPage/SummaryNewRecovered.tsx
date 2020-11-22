import React from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { Bar, Doughnut, Polar } from "react-chartjs-2";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import { CountrySummary } from "../../Interface/CountrySummary";
import generateRandomColor from "../../function/generateRandomColors";
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
        backgroundColor: generateRandomColor(data[0].countrySummary),
        hoverBackgroundColor: generateRandomColor(data[0].countrySummary),
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
