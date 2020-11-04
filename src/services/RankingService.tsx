import http from "./config/http-common";

const getTopTotalRecovered = async () => {
  return await http.get("/countriessummary/top/total/recovered");
};

const getTopTotalDeaths = async () => {
  return await http.get("/countriessummary/top/total/deaths");
};

const getTopTotalConfirmed = async () => {
  return await http.get("/countriessummary/top/total/confirmed");
};

export default {
  getTopTotalDeaths,
  getTopTotalRecovered,
  getTopTotalConfirmed,
};
