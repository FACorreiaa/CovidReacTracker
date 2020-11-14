import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCard from "../../components/Card/Card";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import { useForm } from "react-hook-form";
import CustomDayOneTemplate from "../../components/Form/DayOneForm";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import { FaCheck, FaSkullCrossbones, FaHeart } from "react-icons/fa";

export default function LiveDailyCountry() {
  const countryList: any = useCountriesDropdown();

  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/daily/country/${country}`;
  const { data, error } = useSWR(url, fetcher);
  const { handleSubmit } = useForm();

  let value = React.useRef("");

  const onClick = () => {
    setCountry(value.current);
    mutate(data, false);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const country = e.target.value;
    console.log(country);
    setCountry(country);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    value.current = e.target.value;
  };

  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;
  return (
    <div>
      <CustomSecondaryContainer>
        <CustomDayOneTemplate
          handleFieldChange={handleFieldChange}
          selectValue={country}
          countryList={countryList}
          for="country"
          id="country"
          type="text"
          placeholder="Insert Country"
          onChange={onChange}
          label="Country"
          myRef={value}
          onClick={handleSubmit(onClick)}
        />

        <CustomSummaryTitle />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        <div className="py-5">
          <div className="h-full overflow-y-auto">
            <div className="container  mx-auto grid">
              {country.length &&
                data.map((d: any) => {
                  return (
                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                      <h3>{`Values for: ${d.Country}`}</h3>
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
      </CustomSecondaryContainer>
    </div>
  );
}
