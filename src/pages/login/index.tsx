import React, { FC, memo, useEffect } from 'react'
import styles from './index.module.scss'
import { Typography, Button, Space, Form, Input, Checkbox, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { login } from '../../services/users'
import { setToken } from '../../utils/token'
const { Title } = Typography

type FormFields = {
  username: string
  password: string
  remember: boolean
}
const USER_NAME = 'username'
const PASSWORD = 'password'

function setUser(username: string, password: string) {
  localStorage.setItem(USER_NAME, username)
  localStorage.setItem(PASSWORD, password)
}

function getUser() {
  return {
    username: localStorage.getItem(USER_NAME) || '',
    password: localStorage.getItem(PASSWORD) || '',
  }
}

function clearUser() {
  localStorage.removeItem(USER_NAME)
  localStorage.removeItem(PASSWORD)
}

const Login: FC = memo(() => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const { run: loginAccount } = useRequest(login, {
    manual: true,
    onSuccess(res) {
      message.success('登录成功！')
      setToken(res.token)
      navigate('/manage/list')
    },
  })

  const onFinish = (value: FormFields) => {
    const { username, password, remember } = value
    loginAccount(username, password)
    if (remember) {
      setUser(username, password)
    } else {
      clearUser()
    }
  }
  useEffect(() => {
    const { username, password } = getUser()
    form.setFieldsValue({ username, password })
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <Space direction="vertical">
          <Title level={2}>
            <UserAddOutlined />
            <span> 用户登录</span>
          </Title>
        </Space>
        <Form
          form={form}
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
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 1, span: 16 }}>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={'/register'}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
})

export default Login
