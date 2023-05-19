import React, { memo } from 'react'
import { AppstoreAddOutlined, BarsOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import styles from './index.module.scss'
import ComponentLib from './component-lib'

const ComponentTabs = [
  {
    label: (
      <span>
        <AppstoreAddOutlined />
        组件库
      </span>
    ),
    key: '0',
    children: <ComponentLib />,
  },
  {
    label: (
      <span>
        <BarsOutlined />
        图层
      </span>
    ),
    key: '1',
    children: '组件库',
  },
]

const LeftPanel = memo(() => {
  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="0" items={ComponentTabs} />
    </div>
  )
})

export default LeftPanel
