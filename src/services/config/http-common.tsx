import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
