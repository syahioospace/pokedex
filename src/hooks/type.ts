import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from 'react-query'
import { APIResponseError } from '@/services'

export interface AppUseQueryOptions<T>
  extends UseQueryOptions<T, APIResponseError, T, any> { }

export interface AppUseInfiniteQueryOptions<T>
  extends UseInfiniteQueryOptions<T, APIResponseError, T, any> { }
