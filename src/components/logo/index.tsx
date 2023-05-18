import React, { memo, useEffect, useState } from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store'

const Logo = memo(() => {
  const { username } = useAppSelector(state => state.user)
  const [pathname, setPathname] = useState('/')

  useEffect(() => {
    if (username) setPathname('/manage/list')
  }, [])

  return (
    <Link className={styles.logo} to={pathname}>
      <Space>
        <EditOutlined />
        <div>问卷调查</div>
      </Space>
    </Link>
  )
})

export default Logo
