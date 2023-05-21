import React, { memo, MouseEvent } from 'react'
import { getComponentConfByType } from '../../../../components/question-components'
import useGetComponentList from '../../../../hooks/useGetComponentList'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { changeSelectId } from '../../../../store/modules/components'
import classnames from 'classnames'
import styles from './index.module.scss'

const getComponent = (type: string) => {
  const component = getComponentConfByType(type)!
  const { Component } = component
  return Component
}

const EditCanvas = memo(() => {
  const { list } = useGetComponentList()
  const dispatch = useAppDispatch()
  const selectId = useAppSelector(state => state.componentList.selectId)

  const onClick = (e: MouseEvent, id: string) => {
    e.stopPropagation()
    dispatch(changeSelectId(id))
  }
  return (
    <div className={styles['edit-canvas']}>
      {list
        .filter(item => !item.isHidden)
        .map(component => {
          const { fe_id, props, type, isLock } = component
          const Component = getComponent(type)
          return (
            <div
              key={fe_id}
              className={classnames(
                styles['component-wrapper'],
                selectId === fe_id ? styles.selected : '',
                isLock ? styles.lock : ''
              )}
              onClick={e => onClick(e, fe_id)}
            >
              <div className={styles.component}>
                <Component {...props} />
              </div>
            </div>
          )
        })}
    </div>
  )
})

export default EditCanvas
