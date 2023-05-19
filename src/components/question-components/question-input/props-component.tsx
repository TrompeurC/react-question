import { Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { FC, memo, useEffect } from 'react'
import { QuestionInputProps } from './types'

const PropsComponent: FC<QuestionInputProps> = memo(props => {
  const { placeholder, title, onChange } = props
  const [form] = useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [placeholder, title])
  const onValueChange = () => {
    const values = form.getFieldsValue()
    onChange && onChange(values)
  }
  return (
    <Form
      form={form}
      onValuesChange={onValueChange}
      initialValues={{ placeholder, title }}
      layout="vertical"
    >
      <Form.Item
        label="标题"
        name={'title'}
        rules={[{ required: true, message: '该选项为必填项' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="placeholder" name={'placeholder'}>
        <Input />
      </Form.Item>
    </Form>
  )
})

export default PropsComponent
