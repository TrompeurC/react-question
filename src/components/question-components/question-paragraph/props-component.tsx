import { Checkbox, Form, Input, Radio, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { FC, memo, useEffect } from 'react'
import { QuestionParagraphProps } from './types'

const PropsComponent: FC<QuestionParagraphProps> = memo(props => {
  const { text, isCenter, onChange, isLock } = props

  const [form] = useForm()
  useEffect(() => {
    form.setFieldsValue({
      text,
      isCenter,
    })
  }, [text, isCenter])
  const onValuesChange = () => {
    const values = form.getFieldsValue()
    onChange && onChange(values)
  }
  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ text, isCenter }}
      layout="vertical"
      disabled={isLock}
    >
      <Form.Item label="文本" name={'text'} rules={[{ required: true, message: '该选项为必填项' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name={'isCenter'} valuePropName="checked">
        <Checkbox>是否居中</Checkbox>
      </Form.Item>
    </Form>
  )
})

export default PropsComponent
