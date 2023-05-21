import { Checkbox, Form, Input, Radio, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { FC, memo, useEffect } from 'react'
import { QuestionTitleProps } from './types'

const PropsComponent: FC<QuestionTitleProps> = memo(props => {
  const { text, level, isCenter, onChange, isLock } = props

  const [form] = useForm()
  useEffect(() => {
    form.setFieldsValue({
      text,
      level,
      isCenter,
    })
  }, [text, level, isCenter])
  const onValuesChange = () => {
    const values = form.getFieldsValue()
    onChange && onChange(values)
  }
  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ text, level, isCenter }}
      layout="vertical"
      disabled={isLock}
    >
      <Form.Item label="文本" name={'text'} rules={[{ required: true, message: '该选项为必填项' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="level" name={'level'}>
        <Radio.Group>
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
          <Radio value={5}>5</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={'isCenter'} valuePropName="checked">
        <Checkbox>是否居中</Checkbox>
      </Form.Item>
    </Form>
  )
})

export default PropsComponent
