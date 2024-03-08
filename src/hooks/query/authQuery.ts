import { authServices } from '@/services'
import { useMutation } from 'react-query'
import { queryKey } from '../queryKey'

export const useLogin = () => useMutation(queryKey.LOGIN, authServices.login)
