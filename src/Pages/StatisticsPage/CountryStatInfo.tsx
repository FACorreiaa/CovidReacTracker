import React, { useState } from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
import { CustomSecondaryContainer } from "../../components/Landing/CustomSecondaryContainer";
import CustomCountryTitle from "../../components/SummaryTitle/CustomCountryTitle";
import CustomSummaryTitle from "../../components/SummaryTitle/CustomSummaryTitle";
import CustomDayOneTemplate from "../../components/Form/DayOneForm";
import useCountriesDropdown from "../../hooks/useCountriesDropdown";
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
        {!country.length
          ? null
          : data.map((info: CountryInfo) => {
              return (
                <CustomSecondaryContainer>
                  <div className="py-12">
                    <div className="mx-auto px-4 tiny:grid sm:px-6 lg:px-8 ">
                      <div className="tiny:text-center tiny:grid tiny:gap-6 mb-8 lg:text-center">
                        <h2 className="text-base text-black font-semibold tracking-wide uppercase">
                          Country information
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                          Regular information about quality of life
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                          This statistics are updated twice per month. Usually
                          at the 15th and 30th.
                        </p>
                      </div>

                      <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 tiny:grid tiny:grid-cols-2 tiny:gap-x-8 tiny:gap-y-10">
                          <div className="tiny:grid flex">
                            <div className="tiny:ml-4 tiny:grid-flow-col flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-gray-900">
                                <i className="far fa-flag"></i>
                              </div>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Continent
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.continent
                                  ? "no data to show"
                                  : info.continent}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Country
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.location
                                  ? "no data to show"
                                  : info.location}
                              </dd>
                            </div>
                          </div>

                          <div className="flex tiny:grid">
                            <div className="tiny:ml-4 flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-gray-900">
                                <i className="fas fa-users"></i>
                              </div>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Population
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.population
                                  ? "no data to show"
                                  : info.population}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Population Density
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.population_density
                                  ? "no data to show"
                                  : info.population_density}
                              </dd>
                            </div>
                          </div>

                          <div className="flex tiny:grid">
                            <div className="flex-shrink-0">
                              <div className="tiny:ml-4 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-gray-900">
                                <i className="fas fa-smoking"></i>
                              </div>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Male Smokers
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.male_smokers
                                  ? "no data to show"
                                  : info.male_smokers}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Female Smokers
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.female_smokers
                                  ? "no data to show"
                                  : info.female_smokers}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Cardio vascular Death rate
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.cardiovasc_death_rate
                                  ? "no data to show"
                                  : info.cardiovasc_death_rate}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Diabetes
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.diabetes_prevalence
                                  ? "No data to show"
                                  : info.diabetes_prevalence}
                              </dd>
                            </div>
                          </div>

                          <div className="flex tiny:grid">
                            <div className="tiny:ml-4 flex-shrink-0">
                              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-gray-900">
                                <i className="far fa-heart"></i>
                              </div>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Human Development Index
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.human_development_index
                                  ? "No data to show"
                                  : info.human_development_index}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Life Expectancy
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.life_expectancy
                                  ? "No data to show"
                                  : info.life_expectancy}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                Extreme Poverty
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.extreme_poverty
                                  ? "No data to show"
                                  : info.extreme_poverty}
                              </dd>
                            </div>
                            <div className="ml-4 inline-block flex-row ">
                              <dt className="text-lg leading-6 font-medium text-gray-900">
                                GDP per capita
                              </dt>
                              <dd className="mt-2 text-base text-gray-500">
                                {!info.gdp_per_capita
                                  ? "No data to show"
                                  : info.gdp_per_capita}
                              </dd>
                            </div>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </CustomSecondaryContainer>
              );
            })}
      </CustomSecondaryContainer>
    </div>
  );
}
