import React, { memo } from 'react'
import styles from './index.module.scss'
import { Typography, Button, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Title, Text } = Typography

const Home = memo(() => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <Space direction="vertical">
        <Title>问卷调查|在线投票</Title>
        <Text>已累计创建问卷100份， 发布问卷90份 ，收到答卷980份</Text>
        <Button type="primary" onClick={() => navigate('/manage/list')}>
          开始使用
        </Button>
      </Space>
    </div>
  )
})

export default Home
