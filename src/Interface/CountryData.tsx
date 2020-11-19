export default interface CountryData {
  date: string;
  total_cases_per_million: number;
  new_cases_per_million: number;
  new_cases_smoothed_per_million: number;
  total_deaths_per_million: number;
  new_deaths_per_million: number;
  new_deaths_smoothed_per_million: number;
}
