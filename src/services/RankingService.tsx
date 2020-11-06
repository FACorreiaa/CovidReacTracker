import http from "./config/http-common";

//not using
export const getTopTotalRecovered = async () => {
  return await http.get("/countriessummary/top/total/recovered");
};

export const getTopTotalDeaths = async () => {
  return await http.get("/countriessummary/top/total/deaths");
};

export const getTopTotalConfirmed = async () => {
  return await http.get("/countriessummary/top/total/confirmed");
};
