import { AxiosError, AxiosRequestConfig } from 'axios'

export interface APIResponseError {
  error_code: number
  message: string
  success: boolean
  trace: any[]
}

export interface APIResponse {
  success: boolean
  message?: string
}

export interface APIRequestConfig extends AxiosRequestConfig { }

export interface AppAxiosError<T> extends AxiosError<APIResponseError, T> { }
