import { useRequest } from 'ahooks'
import { useEffect, useState } from 'react'
import { getUserInfo } from '../services/users'
import { useAppDispatch } from '../store'
import { login } from '../store/modules/user'
import { getToken } from '../utils/token'
import useUserInfo from './useUserInfo'

export default function useLoadUserInfoData() {
  const [wait, setWait] = useState(true)
  const { username } = useUserInfo()
  const token = getToken()
  const dispatch = useAppDispatch()
  const { run: getUser } = useRequest(getUserInfo, {
    manual: true,
    onSuccess(res) {
      dispatch(login(res as { username: string; nickname: string }))
    },
    onFinally() {
      setWait(false)
    },
  })
  useEffect(() => {
    if (username) {
      setWait(false)
      return
    }
    getUser()
    // setWait(false)
  }, [username])

  return wait
}
