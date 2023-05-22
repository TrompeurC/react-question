import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Radio, Select, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { FC, memo, useEffect } from 'react'
import { QuestionCheckboxProps } from './types'
import { nanoid } from 'nanoid'

const PropsComponent: FC<QuestionCheckboxProps> = memo((props: QuestionCheckboxProps) => {
  const { title, options, onChange, isVertical, isLock } = props

  const [form] = useForm()
  useEffect(() => {
    form.setFieldsValue({
      title,
      options,
      isVertical,
    })
  }, [title, options, isVertical])
  const onValuesChange = () => {
    const values = form.getFieldsValue() as QuestionCheckboxProps
    const { options } = values
    values.options = options?.filter(item => item.text != null)
    onChange && onChange(values)
  }
  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      initialValues={{ title, options, isVertical }}
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
                    <Form.Item noStyle name={[field.name, 'checked']} valuePropName="checked">
                      <Checkbox style={{ marginInlineEnd: '10px' }} />
                    </Form.Item>
                    <Form.Item noStyle name={[field.name, 'text']}>
                      <Input placeholder="请输入" style={{ width: '60%' }} />
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
                      checked: false,
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
      {/* <Form.Item name={'value'} label="默认选择">
        <Select options={options?.map(item => ({ value: item.value, label: item.text }))}></Select>
      </Form.Item> */}
      <Form.Item name={'isVertical'} valuePropName="checked">
        <Checkbox>是否垂直排列</Checkbox>
      </Form.Item>
    </Form>
  )
})

export default PropsComponent
