import { accessToken_key } from "@/constants/localstorageKeys";
import { signOut } from "@/service/auth/signOut";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage } from "@/utils/browserStorage/localstorage";
import axios from "axios";
import { envConfig } from "../config/envConfig";

const axiosInstance = axios.create({
  baseURL: envConfig.backendUrl,
});
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(accessToken_key);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  async function (response) {
    if (response?.status === 401 || response?.status === 403) {
      await signOut();
    }
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const responseObject: IGenericErrorResponse = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      error: error?.response?.data?.message,
    };
    return responseObject;
  }
);

export { axiosInstance };
