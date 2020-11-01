import http from "./config/http-common";

interface GeneralSubInfo {
  email: string;
}

interface CountrySubInfo {
  email: string;
  country: string;
}

const postGeneralSub = async (data: GeneralSubInfo) => {
  console.log("data", data);
  return await http.post("/user/sub/general", data);
};

const postCountrySub = async (data: CountrySubInfo) => {
  return await http.post("/user/sub/country", data);
};

const getCountriesList = async () => {
  return await http.get("/slugs/countries/list");
};

export default { postGeneralSub, postCountrySub, getCountriesList };
