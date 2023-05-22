import { CheckOutlined, EditOutlined, LeftOutlined } from '@ant-design/icons'
import { useDebounceEffect, useKeyPress, useRequest } from 'ahooks'
import { Button, Input, message, Space, Typography } from 'antd'
import React, { ChangeEvent, KeyboardEventHandler, memo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetComponentList from '../../../../hooks/useGetComponentList'
import useGetPageSetting from '../../../../hooks/useGetPageSetting'
import { updateQuestion } from '../../../../services/question'
import { useAppDispatch } from '../../../../store'
import { resetPageInfo } from '../../../../store/modules/pageinfo'
import EditTool from '../edit-tool'
import styles from './index.module.scss'

const { Title } = Typography

const SaveButton = () => {
  const { id } = useParams()
  const { list } = useGetComponentList()
  const pageSetting = useGetPageSetting()

  const { loading, run } = useRequest(
    async () => {
      if (!id) return
      await updateQuestion(id, { componentList: list, ...pageSetting })
    },
    {
      manual: true,
      onSuccess() {
        // message.success('保存成功')
      },
    }
  )
  useKeyPress(['meta.s', 'ctrl.s'], event => {
    event.preventDefault()
    !loading && run()
  })

  useDebounceEffect(
    () => {
      run()
    },
    [list, pageSetting],
    { wait: 1000 }
  )
  return (
    <Button disabled={loading} size="small" icon={<CheckOutlined />} onClick={run}>
      保存
    </Button>
  )
}
const PublishedButton = () => {
  const navigate = useNavigate()

  const { id } = useParams()
  const { list } = useGetComponentList()
  const pageSetting = useGetPageSetting()

  const { loading, run } = useRequest(
    async () => {
      if (!id) return
      await updateQuestion(id, { componentList: list, ...pageSetting, isPublished: true })
    },
    {
      manual: true,
      onSuccess() {
        message.success('发布成功')
        navigate(`/question/stat/${id}`)
      },
    }
  )

  return (
    <Button disabled={loading} size="small" type="primary" onClick={run}>
      发布
    </Button>
  )
}

const EditHeader = memo(() => {
  const navigate = useNavigate()
  const pageSetting = useGetPageSetting()
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useAppDispatch()

  const onchange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(resetPageInfo({ ...pageSetting, title: event.target.value }))
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space>
          <Button size="small" type="link" icon={<LeftOutlined />} onClick={() => navigate(-1)}>
            返回
          </Button>
          {isEdit ? (
            <Input
              value={pageSetting.title}
              onPressEnter={e => setIsEdit(false)}
              onChange={onchange}
            />
          ) : (
            <Title level={5}>{pageSetting.title}</Title>
          )}

          {!isEdit && (
            <Button
              type="link"
              shape="circle"
              onClick={() => setIsEdit(!isEdit)}
              onBlur={() => setIsEdit(false)}
              icon={<EditOutlined />}
            ></Button>
          )}
        </Space>
      </div>
      <div className={styles.main}>
        <EditTool />
      </div>
      <div className={styles.right}>
        <Space>
          <SaveButton />
          <PublishedButton />
        </Space>
      </div>
    </div>
  )
})

export default EditHeader
