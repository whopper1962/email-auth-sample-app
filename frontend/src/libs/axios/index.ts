import Axios, { AxiosInstance } from "axios";
import { onRequest } from "@/libs/axios/interceptors/onRequest";
import { onResponse } from "@/libs/axios/interceptors/onResponse";
import { onErrorResponse } from "@/libs/axios/interceptors/onErrorResponse";

export const axios: AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  responseType: "json",
  timeout: 30000,
});

axios.interceptors.request.use(onRequest);
axios.interceptors.response.use(onResponse, onErrorResponse);
