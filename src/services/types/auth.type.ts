import { APIResponse } from "../type"

export namespace AuthAPI {
  export namespace Login {
    export type Request = {
      email: string
      password: string
    }

    export interface Response extends APIResponse {
      data: User
      token: string
    }

    interface User {
      id: number
      name: string
      email: string
      phone_number: number | string
      address: string
    }
  }
}