import { UserOutlined } from '@ant-design/icons'
import { Space, Button } from 'antd'
import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUserInfo from '../../hooks/useUserInfo'
import { clearToken } from '../../utils/token'
import styles from './index.module.scss'

const UserInfo = memo(() => {
  const info = useUserInfo()
  const navigate = useNavigate()
  const { nickname } = info || {}
  const logout = () => {
    clearToken()
    navigate('/login')
    window.location.reload()
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
