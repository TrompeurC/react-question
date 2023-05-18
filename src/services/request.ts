import { getToken } from './../utils/token'
import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  timeout: 5 * 1000,
  baseURL: '/api',
})

instance.interceptors.request.use(config => {
  const token = getToken()
  token && (config.headers['Authorization'] = `Bearer ${token}`)
  return config
})

instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData
  if (errno !== 0) {
    // 错误提示
    console.log(msg)
    if (msg) message.error(msg)
    throw new Error(msg)
  }
  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
