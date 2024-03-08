import { AuthAPI } from '../types'
import { axiosClient } from '..'

export async function login(data: AuthAPI.Login.Request) {
  return axiosClient.post<AuthAPI.Login.Response>('/login', data)
}
