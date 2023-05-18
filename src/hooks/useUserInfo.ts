import { useRequest } from 'ahooks'
import { getUserInfo } from '../services/users'
import { useAppSelector } from '../store'
import { shallowEqual } from 'react-redux'

export default function useUserInfo() {
  // const { data } = useRequest(getUserInfo)
  const user = useAppSelector(state => state.user, shallowEqual)

  return user
}
