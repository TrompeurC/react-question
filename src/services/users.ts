import request from './request'
import type { ResDataType } from './request'

type Account = {
  username: string
  password: string
  nickname?: string
}

// 获取用户信息
export async function getUserInfo() {
  const url = `/user/info`
  const data = (await request.get(url)) as ResDataType
  return data
}

// 注册用户
export async function register(account: Account) {
  const url = '/user/register'
  // const body = { username, password, nickname: username || nickname }
  const data = (await request.post(url, account)) as ResDataType
  return data
}

// 登录
export async function login(username: string, password: string) {
  const url = '/user/login'
  const data = (await request.post(url)) as ResDataType

  return data
}
