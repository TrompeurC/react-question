import {
  CopyOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  RedoOutlined,
  SnippetsOutlined,
  UndoOutlined,
} from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'
import React, { memo } from 'react'
import { ActionCreators } from 'redux-undo'
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
  const { selectId, components, selectComponent, copyComponent: copyCom } = useGetComponentList()
  // const [isMove, setIsMove] = useState(true)
  // useEffect(() => {
  //   const index = components.findIndex(item => item.fe_id == selectId)
  //   console.log(index == 0 || index == components.length - 1)
  //   if (index == 0 || index == components.length - 1) setIsMove(false)
  // }, [selectId])

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
  // function handleUp(step: number) {
  //   dispatch
  // }

  // function handleDown(step: number) {
  //   dispatch
  // }

  const handleUndo = () => {
    dispatch(ActionCreators.undo())
  }

  const handleRedo = () => {
    dispatch(ActionCreators.redo())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button
          disabled={!selectComponent}
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        ></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          disabled={!selectComponent}
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={handleHidden}
        ></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          shape="circle"
          disabled={!selectComponent}
          type={selectComponent?.isLock ? 'primary' : 'default'}
          icon={<LockOutlined />}
          onClick={handleLock}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button
          shape="circle"
          disabled={!selectComponent}
          icon={<CopyOutlined />}
          onClick={handleCopy}
        ></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          disabled={!copyCom}
          shape="circle"
          icon={<SnippetsOutlined />}
          onClick={handlePaste}
        ></Button>
      </Tooltip>
      <Tooltip title="撤销">
        <Button shape="circle" icon={<UndoOutlined />} onClick={handleUndo}></Button>
      </Tooltip>
      <Tooltip title="重做">
        <Button shape="circle" icon={<RedoOutlined />} onClick={handleRedo}></Button>
      </Tooltip>
      {/* <Tooltip title="上移">
        <Button
          shape="circle"
          disabled={!selectComponent && !isMove}
          icon={<UpOutlined />}
          onClick={() => handleUp(-1)}
        ></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button
          shape="circle"
          disabled={!selectComponent && !isMove}
          icon={<DownOutlined />}
          onClick={() => handleDown(1)}
        ></Button>
      </Tooltip> */}
    </Space>
  )
})

export default EditTool
