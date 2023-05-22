import Title from 'antd/es/typography/Title'
import React, { memo } from 'react'
import { getComponentConfByType, groupComponent } from '../../../../components/question-components'
import { useAppDispatch } from '../../../../store'
import styles from './componentLib.module.scss'
import { nanoid } from 'nanoid'
import { insertComponent } from '../../../../store/modules/components'

const ComponentLib = memo(() => {
  const dispatch = useAppDispatch()

  const onClick = (type: string) => {
    const { title, Component, defaultProps } = getComponentConfByType(type)!
    dispatch(
      insertComponent({
        fe_id: nanoid(),
        title,
        isHidden: false,
        props: defaultProps,
        type,
        isLock: false,
      })
    )
  }
  return (
    <div style={{ overflow: 'scroll', height: '600px' }}>
      {groupComponent.map(group => {
        const { groupName, components } = group

        return (
          <div key={groupName}>
            <Title level={5}>{groupName}</Title>
            {components.map((Com, index) => (
              <div
                key={index}
                className={styles['component-wrapper']}
                onClick={e => onClick(Com.type)}
              >
                <div className={styles.component}>
                  <Com.Component />
                </div>
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
})

export default ComponentLib
