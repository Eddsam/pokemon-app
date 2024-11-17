import axios from "axios";
import { dotenv } from "../dotenv";
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError,
} from "./axiosConfig.interceptors";

const instance = axios.create({
  baseURL: `${dotenv.BASEURL}`,
});

// request header
instance.interceptors.request.use(onRequest, onRequestError);

// response parse
instance.interceptors.response.use(onResponse, onResponseError);

export const AxiosInstance = instance;
