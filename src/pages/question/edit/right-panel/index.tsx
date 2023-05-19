import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { FC, memo, useEffect, useState } from 'react'
import useGetComponentList from '../../../../hooks/useGetComponentList'

import styles from './index.module.scss'
import PropsComponent from './props-component'

const RightPanel = memo(() => {
  const [activeKey, setActiveKey] = useState<string>('0')
  const { selectId } = useGetComponentList()
  const ComponentTabs = [
    {
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      key: '0',
      children: <PropsComponent />,
    },
    {
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      key: '1',
      children: '页面设置',
    },
  ]

  useEffect(() => {
    if (!selectId) setActiveKey('1')
    else setActiveKey('0')
  }, [selectId])
  const onChange = (activeKey: string) => {
    setActiveKey(activeKey)
  }
  return (
    <div className={styles.container}>
      <Tabs defaultActiveKey="0" onChange={onChange} activeKey={activeKey} items={ComponentTabs} />
    </div>
  )
})

export default RightPanel
