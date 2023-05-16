import React, { memo, useState } from 'react'
import styles from './manage.layout.module.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import {
  PlusOutlined,
  UnorderedListOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Button, Divider, message, Space } from 'antd'
import { createQuestion } from '../services/question'
import { useRequest } from 'ahooks'

const ManageLayout = memo(() => {
  const location = useLocation()
  const { pathname } = location
  const navigate = useNavigate()
  // 创建问卷按钮状态

  const { loading, run: handleCreate } = useRequest(createQuestion, {
    manual: true,
    onSuccess(res) {
      navigate(`/question/edit/${res.id}`)
      message.success('创建成功')
    },
  })

  // const handleCreate = async () => {
  //   setLoading(true)
  //   const res = await createQuestion()
  //   navigate(`/question/edit/${res.id}`)
  //   message.success('创建成功')
  //   setLoading(false)
  // }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleCreate} disabled={loading}>
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
