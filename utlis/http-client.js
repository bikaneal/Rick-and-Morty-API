import axios from "axios";
import {
  handleRequest,
  handleResponse,
  handleRequestError,
  handleResponseError,
} from "./interceptors";

export const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  headers: { Accept: "application/json" },
});

instance.interceptors.request.use(handleRequest, handleRequestError);
instance.interceptors.response.use(handleResponse, handleResponseError);