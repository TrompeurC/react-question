import { CheckOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import EditTool from '../edit-tool'
import styles from './index.module.scss'

const EditHeader = memo(() => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space>
          <Button size="small" type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
            返回
          </Button>
          <h5>问题答卷</h5>
        </Space>
      </div>
      <div className={styles.main}>
        <EditTool />
      </div>
      <div className={styles.right}>
        <Space>
          <Button size="small" icon={<CheckOutlined />}>
            保存
          </Button>
          <Button size="small" type="primary">
            发布
          </Button>
        </Space>
      </div>
    </div>
  )
})

export default EditHeader
