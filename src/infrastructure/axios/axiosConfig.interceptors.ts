import { InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { displaySwal } from "../../presentation/components/swal/displaySwal";

export const onRequest = async (config: InternalAxiosRequestConfig) => {
  config.headers["Content-Type"] = "application/json";

  return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.log(error);
  displaySwal({ icon: "error", title: error.name, text: error.message });
  return Promise.reject(error);
};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

export const onResponseError = async (
  error: AxiosError
): Promise<AxiosError> => {
  return Promise.reject(error);
};
