import { useRequest } from 'ahooks'
import { getUserInfo } from '../services/users'

export default function useUserInfo() {
  const { data } = useRequest(getUserInfo)

  return data
}
