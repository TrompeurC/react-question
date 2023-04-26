import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import styles from './main.layout.module.scss'
import Logo from '../components/logo'
import UserInfo from '../components/user-info'

const { Header, Content, Footer } = Layout

const MainLayout = memo(() => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div>
          <Logo />
        </div>
        <div>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.content}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>问卷调查&copy;2023 - present .</Footer>
    </Layout>
  )
})

export default MainLayout
