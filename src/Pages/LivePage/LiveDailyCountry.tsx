import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import Loading from "../../components/Loading/Loading";
import { fetcher } from "../../services/config/http-common";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomCard from "../../components/Card/Card";
import CustomFormButton from "../../components/Button/CustomFormButton";
import CustomInputCountryForm from "../../components/Form/CustomInput";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomFormTemplate from "../../components/Form/FormTemplate";

export default function LiveDailyCountry() {
  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/countriessummary/daily/country/${country}`;
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
  return (
    <div>
      <CustomSecondaryContainer>
        <CustomFormTemplate onClick={onClick}>
          <div className="mb-4">
            <CustomInputCountryForm
              for="country"
              id="country"
              type="text"
              placeholder="Insert Country"
              onChange={onChange}
              label="Insert Country"
              myRef={value}
            />
          </div>
        </CustomFormTemplate>

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
      </CustomSecondaryContainer>
    </div>
  );
}
