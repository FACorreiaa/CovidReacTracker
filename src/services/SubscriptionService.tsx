import http from "./config/http-common";

interface GeneralSubInfo {
  email: string;
}

interface CountrySubInfo {
  email: string;
  country: string;
}

export const postGeneralSub = async (data: GeneralSubInfo) => {
  return await http.post("/user/sub/general", data);
};

export const postCountrySub = async (data: CountrySubInfo) => {
  return await http.post("/user/sub/country", data);
};

export const getCountriesList = async () => {
  return await http.get("/slugs/countries/list");
};

export const getSummaryList = async () => {
  return await http.get("/summary");
};

export const getTotalList = async () => {
  return await http.get("/wip/total");
};
