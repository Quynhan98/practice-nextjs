// Utils
import { axiosInstance } from '@utils/api'

// Types
import { IAccountLogin } from '@self-types/index'
import { IAccountRegister } from '@self-types/index'

export const authLogin = (data: IAccountLogin) => {
  return axiosInstance.post('login', data)
}

export const authRegister = (data: IAccountRegister) => {
  return axiosInstance.post('register', data)
}
