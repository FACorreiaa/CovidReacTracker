import React, { useState } from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { IDayOne } from "../../Interface/Dayone";
import { Bar } from "react-chartjs-2";
import { format, parseISO } from "date-fns";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomDayOneTemplate from "../../components/Form/DayOneForm";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
import CustomWarningMessage from "../../components/ErrorMessages/WarningMessage";
import CountryInfo from "../../Interface/CountryInfo";
export default function CountryStatInfo() {
  const countryList: any = useCountriesDropdown();

  const [country, setCountry] = useState("");
  const url = `${process.env.REACT_APP_BASE_URL}/countrystats/country/info/${country}`;
  const { data, error, mutate } = useSWR(url, fetcher);

  let value = React.useRef("");
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //const country = e.target.value;
    value.current = e.target.value;
    console.log(country);
  };
  /*const onClick = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCountry(value.current);
      setValues(data);
    },
    [data]
  );*/
  const onClick = () => {
    setCountry(value.current);
    mutate(data);
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
        {!country ? "" : <CustomCountryTitle country={country} />}
        <CustomSummaryTitle />
      </CustomSecondaryContainer>
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
          onClick={onClick}
        />
      </CustomSecondaryContainer>
      <CustomSecondaryContainer>
        {!country.length ? (
          <CustomWarningMessage />
        ) : (
          data.map((info: CountryInfo) => {
            return (
              <div>
                {console.log("INFO", info)}
                <article className="prose prose-sm ">
                  <h3 className="text-left">{info.location}</h3>
                  <label>Continent: </label>
                  <h3>{info.continent}</h3>
                </article>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                  <div className="row-span-1 col-span-2 ">
                    <div className="w-full max-w-sm">
                      <p>{info.population}</p>
                      <p>{info.population_density}</p>{" "}
                    </div>
                  </div>
                  <div>
                    <div className="w-full max-w-sm">
                      <p>{info.male_smokers}</p>
                      <p>{info.female_smokers}</p>
                    </div>
                  </div>
                  <div>
                    <div className="w-full max-w-sm">
                      <p>{info.cardiovasc_death_rate}</p>
                      <p>{info.diabetes_prevalence}</p>
                      <p>{info.human_development_index}</p>
                      <p>{info.life_expectancy}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </CustomSecondaryContainer>
    </div>
  );
}
