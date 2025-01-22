import { env } from "@/constants/MyVariables";
import axios from "axios";

export const apiAuth = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 8000,
  headers: { "Content-Type": "application/json", "Accept-Language": "en" },
});

apiAuth.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);
apiAuth.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);
