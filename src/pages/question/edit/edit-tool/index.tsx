import {
  CopyOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  SnippetsOutlined,
} from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'
import React, { memo } from 'react'
import useGetComponentList from '../../../../hooks/useGetComponentList'
import { useAppDispatch } from '../../../../store'
import {
  copyComponent,
  deleteComponent,
  hiddenComponent,
  lockComponent,
  pasteComponent,
} from '../../../../store/modules/components'

const EditTool = memo(() => {
  const dispatch = useAppDispatch()
  const { selectComponent, copyComponent: copyCom } = useGetComponentList()

  const handleDelete = () => {
    dispatch(deleteComponent())
  }
  const handleHidden = () => {
    dispatch(hiddenComponent(true))
  }

  const handleLock = () => {
    dispatch(lockComponent(!selectComponent?.isLock))
  }

  const handleCopy = () => {
    dispatch(copyComponent())
  }
  const handlePaste = () => {
    dispatch(pasteComponent())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button shape="circle" icon={<EyeInvisibleOutlined />} onClick={handleHidden}></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          shape="circle"
          type={selectComponent?.isLock ? 'primary' : 'default'}
          icon={<LockOutlined />}
          onClick={handleLock}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button shape="circle" icon={<CopyOutlined />} onClick={handleCopy}></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          disabled={!copyCom}
          shape="circle"
          icon={<SnippetsOutlined />}
          onClick={handlePaste}
        ></Button>
      </Tooltip>
    </Space>
  )
})

export default EditTool
