import axios from 'axios'
import { APIRequestConfig } from './type'
import { setupInterceptorsTo } from './interceptor'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

let baseAxiosClient = axios.create({ baseURL: baseUrl })
setupInterceptorsTo(baseAxiosClient)

const axiosClient = {
  get<T>(url: string, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.get(url, config)
  },
  post<T>(url: string, data?: unknown, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.post(url, data, config)
  }
}

export default axiosClient
