import {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { APIRequestConfig, APIResponseError } from './type'

const onRequest = (
  config: APIRequestConfig & InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  config.headers["Content-Type"] =
    config.headers["Content-Type"] ?? "application/json";
  config.headers.Accept = "application/json";

  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response?.data
}

const onResponseError = (
  error: AxiosError<APIResponseError>
): Promise<APIResponseError> => {
  return Promise.reject(error.response?.data)
}

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError)
  axiosInstance.interceptors.response.use(onResponse, onResponseError)

  return axiosInstance
}
