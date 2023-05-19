import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useUserInfo from './useUserInfo'
const whiteList = ['/login', '/register', '/']

export default function useNavPage(wait: boolean) {
  const { pathname } = useLocation()
  const { username } = useUserInfo()
  const navigate = useNavigate()
  useEffect(() => {
    if (wait) return
    if (username && ['/login', '/register'].includes(pathname)) {
      navigate('/manage/list')
    }
    if (!username && !whiteList.includes(pathname)) {
      navigate('/login')
    }
  }, [wait])
}
