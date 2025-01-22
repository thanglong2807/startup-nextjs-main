import axios from "axios";
import { env } from "@/constants/MyVariables";

const requestCommunity = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 8000,
});

requestCommunity.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error?.response?.data);
  }
);

requestCommunity.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    if (error?.response?.data?.statusCode === 401) {
      if (env.token) {
        localStorage.removeItem(env.token);
        window.location.reload();
      }
    }
    return Promise.reject(error?.response?.data);
  }
);

const privateRequest = async (
  request: any,
  suffixUrl: string,
  configs?: any,
  contentType?: string
) => {
  const token = env.token && localStorage.getItem(env.token);
  if (token) {
    requestCommunity.defaults.headers.common["Authorization"] =
      `Bearer ${token}`;

    requestCommunity.defaults.headers.common["Accept-Language"] = "en";

    if (contentType) {
      requestCommunity.defaults.headers.common["Content-Type"] = contentType;
      requestCommunity.defaults.maxContentLength = 1000000000000;
      requestCommunity.defaults.maxBodyLength = 1000000000000;
      requestCommunity.defaults.timeout = Infinity;
    } else {
      requestCommunity.defaults.headers.common["Content-Type"] =
        "application/json";
    }
    return request(suffixUrl, configs);
  }
};

export { requestCommunity, privateRequest };
