import { Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { memo, useEffect } from 'react'
import useGetPageSetting from '../../../../hooks/useGetPageSetting'
import { useAppDispatch } from '../../../../store'
import { resetPageInfo } from '../../../../store/modules/pageinfo'

const PageSetting = memo(() => {
  const [form] = useForm()
  const { title, desc, css, js } = useGetPageSetting()
  const dispatch = useAppDispatch()

  useEffect(() => {
    form.setFieldsValue({
      title,
      desc,
      css,
      js,
    })
  }, [title, desc, css, js])

  const onValuesChange = () => {
    const values = form.getFieldsValue()
    dispatch(resetPageInfo(values))
  }
  return (
    <Form
      onValuesChange={onValuesChange}
      layout="vertical"
      form={form}
      initialValues={{ title, desc, css, js }}
    >
      <Form.Item label="问卷标题" name={'title'}>
        <Input />
      </Form.Item>
      <Form.Item label="问卷描述" name={'desc'}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="css" name={'css'}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="js" name={'js'}>
        <Input.TextArea />
      </Form.Item>
    </Form>
  )
})

export default PageSetting
