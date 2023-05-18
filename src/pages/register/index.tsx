import React, { FC, memo } from 'react'
import styles from './index.module.scss'
import { Typography, Button, Space, Form, Input, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { register } from '../../services/users'
const { Title } = Typography

type Account = { username: string; password: string; nickname: string }

const Register: FC = memo(() => {
  const naviagte = useNavigate()
  const onFinish = (value: Account) => {
    registerAccount(value)
  }

  const { run: registerAccount } = useRequest(
    async (value: Account) => {
      await register(value)
    },
    {
      manual: true,
      onSuccess() {
        message.success('注册成功!')
        naviagte('/login')
      },
    }
  )

  return (
    <div className={styles.container}>
      <div>
        <Space direction="vertical">
          <Title level={2}>
            <UserAddOutlined />
            <span> 注册新用户</span>
          </Title>
        </Space>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600, width: 300 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入您的用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入您的密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请输入您的密码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次密码不一致!'))
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
            rules={[{ required: true, message: '请输入您的昵称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={'/login'}>已有账号，登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
})

export default Register
