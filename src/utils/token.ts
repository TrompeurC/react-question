/**
 * @description token
 * @author ez
 */

const USER_TOKEN = 'token'
export const setToken = (token: string) => {
  localStorage.setItem(USER_TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(USER_TOKEN) || ''
}

export const clearToken = () => {
  return localStorage.removeItem(USER_TOKEN)
}
