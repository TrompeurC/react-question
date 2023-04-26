import React, { memo } from 'react'
import styles from './manage.layout.module.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Button, Divider, Space } from 'antd'

const ManageLayout = memo(() => {
  const location = useLocation()
  const { pathname } = location
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button type="primary" icon={<PlusOutlined />}>
          新建问卷
        </Button>
        <Divider />
        <Space direction="vertical">
          <Button
            type={pathname.startsWith('/manage/list') ? 'primary' : 'default'}
            icon={<UnorderedListOutlined />}
            onClick={() => navigate('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'primary' : 'default'}
            icon={<StarOutlined />}
            onClick={() => navigate('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'primary' : 'default'}
            icon={<DeleteOutlined />}
            onClick={() => navigate('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
})

export default ManageLayout
