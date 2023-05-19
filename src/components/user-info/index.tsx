import { UserOutlined } from '@ant-design/icons'
import { Space, Button, message } from 'antd'
import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUserInfo from '../../hooks/useUserInfo'
import { useAppDispatch } from '../../store'
import { clearToken } from '../../utils/token'
import { logout as logoutAction } from '../../store/modules/user'
import styles from './index.module.scss'
import { useRequest } from 'ahooks'
import { login } from '../../services/users'

const UserInfo = memo(() => {
  const info = useUserInfo()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // useRequest(login)

  const { nickname } = info || {}
  const logout = () => {
    clearToken()
    dispatch(logoutAction())
    message.success('退出成功')
    navigate('/login')
    // window.location.reload()
  }
  const infoCom = (
    <div>
      <Space>
        <UserOutlined style={{ color: '#fff' }} />
        <span className={styles.nickname}>{nickname}</span>
        <Button type="link" onClick={logout}>
          退出
        </Button>
      </Space>
    </div>
  )
  const loginCom = <Link to={'/login'}>登录</Link>
  return <>{nickname ? infoCom : loginCom}</>
})

export default UserInfo
