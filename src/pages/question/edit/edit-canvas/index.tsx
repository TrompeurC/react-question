import React, { memo, MouseEvent } from 'react'
import { getComponentConfByType } from '../../../../components/question-components'
import useGetComponentList from '../../../../hooks/useGetComponentList'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { changeSelectId, swapComponent } from '../../../../store/modules/components'
import classnames from 'classnames'
import styles from './index.module.scss'
import useBindCanvasKeyPress from '../../../../hooks/useBindCanvasKeyPress'
import SortComponent from '../../../../components/sort-component'
import SortItem from '../../../../components/sort-component/sort-item'

const getComponent = (type: string) => {
  const component = getComponentConfByType(type)!
  const { Component } = component
  return Component
}

const EditCanvas = memo(() => {
  const { list, selectId } = useGetComponentList()
  const dispatch = useAppDispatch()
  useBindCanvasKeyPress()
  const onClick = (e: MouseEvent, id: string) => {
    e.stopPropagation()
    dispatch(changeSelectId(id))
  }
  const onDragEnd = (oldIndex: number, newIndex: number) => {
    dispatch(swapComponent({ oldIndex, newIndex }))
  }
  return (
    <div className={styles['edit-canvas']}>
      <SortComponent items={list} onDragEnd={onDragEnd}>
        {list
          .filter(item => !item.isHidden)
          .map(component => {
            const { fe_id, props, type, isLock, id } = component
            const Component = getComponent(type)
            return (
              <SortItem key={id} id={id}>
                <div
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
              </SortItem>
            )
          })}
      </SortComponent>
    </div>
  )
})

export default EditCanvas
