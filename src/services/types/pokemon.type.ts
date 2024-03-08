import { APIResponse } from "../type";

export namespace GetPokemonData {
  export interface Response extends APIResponse {
    results: {
      name: string
      url: string
    }[]
  }

  export interface Request {
    offset: string
  }

  interface Type {
    type: {
      name: string
    }
  }

  interface Stats {
    base_stat: number
    stat: {
      name: string
    }
  }
}

export namespace GetPokemonDetail {
  export interface Response extends APIResponse {
    name: string
    types: {
      type: {
        name: string
      }
    }[]
  }

  export interface Request {
    name: string
  }
}