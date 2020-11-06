import React, { useState } from "react";
import { ContainerComp } from "../../components/Container/Container";
import InputCountryForm from "../../components/InputCountry/InputCountry";
import NavBar from "../../components/NavBar/Navbar";
import { fetcher } from "../../services/config/http-common";
import useSWR, { mutate } from "swr";
import Loading from "../../components/Loading/Loading";
import { IDayOne } from "../../Interface/Dayone";
import { Bar } from "react-chartjs-2";
import { format, parseISO } from "date-fns";
import CustomTitle from "../../components/Title/Title";

function DayOne() {
  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/dayone/all/total/country/${country}`;
  const { data, error } = useSWR(url, fetcher);

  let value = React.useRef("");

  /*const onClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCountry(value.current);
      setValues(data);
    },
    [data]
  );*/
  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCountry(value.current);
    mutate(data, false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    value.current = e.target.value;
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  //format(parseISO(`${d.createdAt}`), "PPPPpppp")
  const dataSource = {
    labels: !country
      ? null
      : data[0].name.map((n: IDayOne) => format(parseISO(n.Date), "PPPP")),
    datasets: [
      {
        label: "Active",
        backgroundColor: "rgba(240, 240, 214, 1)",
        borderColor: "rgba(247, 202, 24, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(240, 240, 214, 1)",
        hoverBorderColor: "rgba(247, 202, 24, 1)",
        data: !country ? null : data[0].name.map((n: IDayOne) => n.Active),
      },
      {
        label: "Recovered",
        backgroundColor: "rgba(41, 241, 195, 1)",
        borderColor: "rgba(123, 239, 178, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(41, 241, 195, 1)",
        hoverBorderColor: "rgba(123, 239, 178, 1)",
        data: !country ? null : data[0].name.map((n: IDayOne) => n.Recovered),
      },
      {
        label: "Deaths",
        backgroundColor: "rgba(224, 130, 131, 1)",
        borderColor: "rgba(246, 36, 89, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(224, 130, 131, 1)",
        hoverBorderColor: "rgba(246, 36, 89, 1)",
        data: !country ? null : data[0].name.map((n: IDayOne) => n.Deaths),
      },
    ],
  };
  return (
    <div>
      <NavBar />
      <ContainerComp>
        <InputCountryForm
          myRef={value}
          onChange={onChange}
          onClick={onClick}
          label={"Insert Country"}
        />
        {country.length && data[0].name && (
          <>
            <CustomTitle title={country} />
            <Bar
              data={dataSource}
              width={100}
              height={50}
              options={{
                maintainAspectRatio: true,
              }}
            />
          </>
        )}
      </ContainerComp>
    </div>
  );
}

export default DayOne;
