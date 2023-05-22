import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Radio, Select, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { FC, memo, useEffect } from 'react'
import { QuestionRadioProps } from './types'
import { nanoid } from 'nanoid'

const PropsComponent: FC<QuestionRadioProps> = memo(props => {
  const { title, value, options, onChange, isVertical, isLock } = props

  const [form] = useForm()
  useEffect(() => {
    form.setFieldsValue({
      title,
      value,
      options,
      isVertical,
    })
  }, [title, value, options, isVertical])
  const onValuesChange = () => {
    const values = form.getFieldsValue() as QuestionRadioProps
    const { options } = values
    values.options = options?.filter(item => item.text != null)
    onChange && onChange(values)
  }
  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ title, value, options, isVertical }}
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
      <Form.Item label="选项" name={'options'}>
        <Form.List
          name="options"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('At least 2 passengers'))
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Form.Item required={false} key={field.key}>
                    <Form.Item noStyle name={[field.name, 'text']}>
                      <Input placeholder="请输入" style={{ width: '80%' }} />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        style={{ marginInlineStart: '10px' }}
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                )
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() =>
                    add({
                      text: '',
                      value: nanoid(),
                    })
                  }
                  block
                  icon={<PlusOutlined />}
                >
                  添加选项
                </Button>
                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form.Item>
      <Form.Item name={'value'} label="默认选择">
        <Select options={options?.map(item => ({ value: item.value, label: item.text }))}></Select>
      </Form.Item>
      <Form.Item name={'isVertical'} valuePropName="checked">
        <Checkbox>是否垂直排列</Checkbox>
      </Form.Item>
    </Form>
  )
})

export default PropsComponent
