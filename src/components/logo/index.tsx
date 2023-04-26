import React, { memo } from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const Logo = memo(() => {
  return (
    <Link className={styles.logo} to={'/'}>
      <Space>
        <EditOutlined />
        <div>问卷调查</div>
      </Space>
    </Link>
  )
})

export default Logo
