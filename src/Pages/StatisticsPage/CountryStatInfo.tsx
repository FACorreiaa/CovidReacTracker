import React, { useState } from "react";
import { fetcher } from "../../services/config/http-common";
import useSWR from "swr";
import Loading from "../../components/Loading/Loading";
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
              <div className="py-12 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="lg:text-center">
                    <h2 className="text-base text-black font-semibold tracking-wide uppercase">
                      Country information
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      Regular information about quality of life
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                      This statistics are updated twice per month. Usually at
                      the 15th and 30th.
                    </p>
                  </div>

                  <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-gray-900">
                            <i className="far fa-flag"></i>
                          </div>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Continent
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.continent}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Country
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.location}
                          </dd>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-gray-900">
                            <i className="fas fa-users"></i>
                          </div>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Population
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.population}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Population Density
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.population_density}
                          </dd>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-gray-900">
                            <i className="fas fa-smoking"></i>
                          </div>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Male Smokers
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.male_smokers}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Female Smokers
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.female_smokers}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Cardio vascular Death rate
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.cardiovasc_death_rate}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Diabetes
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.diabetes_prevalence}
                          </dd>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-gray-900">
                            <i className="far fa-heart"></i>
                          </div>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Human Development Index
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.human_development_index}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Life Expectancy
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.life_expectancy}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            Extreme Poverty
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.extreme_poverty}
                          </dd>
                        </div>
                        <div className="ml-4 inline-block flex-row ">
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            GDP per capita
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
                            {info.gdp_per_capita}
                          </dd>
                        </div>
                      </div>
                    </dl>
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