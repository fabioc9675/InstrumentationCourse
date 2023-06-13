import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://waterqualityapp-marusugag.b4a.run/",
});
