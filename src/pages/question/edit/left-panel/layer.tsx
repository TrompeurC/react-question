import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import classNames from 'classnames'
import React, { ChangeEvent, ChangeEventHandler, memo, MouseEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import useGetComponentList from '../../../../hooks/useGetComponentList'
import {
  changeComponent,
  changeComponentTitle,
  changeSelectId,
  ComponentInfoType,
} from '../../../../store/modules/components'
import styles from './layer.module.scss'

const Layer = memo(() => {
  const { selectId, selectComponent, list } = useGetComponentList()
  const [isInput, setIsInput] = useState(false)
  const dispatch = useDispatch()

  const handleSelectComponent = (comCnf: ComponentInfoType) => {
    setIsInput(comCnf.fe_id === selectId)
    dispatch(changeSelectId(comCnf.fe_id))
  }
  // const changeInputTitle = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
  //   if (!selectComponent) return
  //   if (selectComponent.fe_id !== selectId) return
  //   console.log(selectComponent.fe_id, selectId)
  // }
  function isCurrentComponent(id: string) {
    return selectId === id
  }
  const changeTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeComponentTitle(event.target.value))
  }
  const handleHidden = (event: MouseEvent, comp: ComponentInfoType) => {
    event.stopPropagation()
    dispatch(changeComponent({ ...comp, isHidden: !comp.isHidden }))
  }
  const handleLock = (event: MouseEvent, comp: ComponentInfoType) => {
    event.stopPropagation()
    dispatch(changeComponent({ ...comp, isLock: !comp.isLock }))
  }
  return (
    <div>
      {list.map(item => (
        <div
          key={item.fe_id}
          onClick={() => handleSelectComponent(item)}
          className={classNames(styles.line, isCurrentComponent(item.fe_id) ? styles.selected : '')}
        >
          <div>
            {isInput && isCurrentComponent(item.fe_id) ? (
              <Input
                onBlur={() => setIsInput(false)}
                onChange={changeTitleValue}
                value={selectComponent?.title}
              />
            ) : (
              item.title
            )}
          </div>
          <Space>
            <Button
              type={item?.isHidden ? 'primary' : 'default'}
              shape="circle"
              icon={<EyeInvisibleOutlined />}
              onClick={e => handleHidden(e, item)}
            ></Button>
            <Button
              shape="circle"
              type={item?.isLock ? 'primary' : 'default'}
              icon={<LockOutlined />}
              onClick={e => handleLock(e, item)}
            ></Button>
          </Space>
        </div>
      ))}
    </div>
  )
})

export default Layer
