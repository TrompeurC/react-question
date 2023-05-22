import { Checkbox, Form, Input, Radio, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { FC, memo, useEffect } from 'react'
import { QuestionInfoProps } from './types'

const PropsComponent: FC<QuestionInfoProps> = memo(props => {
  const { title, desc, onChange, isLock } = props

  const [form] = useForm()
  useEffect(() => {
    form.setFieldsValue({
      title,
      desc,
    })
  }, [title, desc])
  const onValuesChange = () => {
    const values = form.getFieldsValue()
    onChange && onChange(values)
  }
  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ title, desc }}
      layout="vertical"
      disabled={isLock}
    >
      <Form.Item
        label="标题"
        name={'title'}
        rules={[{ required: true, message: '该选项为必填项' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="描述" name={'desc'}>
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
})

export default PropsComponent
