import React, { memo, useEffect, MouseEvent } from 'react'
import useGetComponentList from '../../../hooks/useGetComponentList'
import useLoadingQuestionData from '../../../hooks/useLoadingQuestionData'
import { useAppDispatch } from '../../../store'
import { changeSelectId } from '../../../store/modules/components'
import EditCanvas from './edit-canvas'
import EditHeader from './edit-header'
import styles from './index.module.scss'
import LeftPanel from './left-panel'
import RightPanel from './right-panel'

const Edit = memo(() => {
  const { loading } = useLoadingQuestionData()
  const dispatch = useAppDispatch()

  const onclick = (e: MouseEvent) => {
    e.stopPropagation()
    dispatch(changeSelectId(''))
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <EditHeader />
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <LeftPanel />
        </div>
        <div className={styles.middle} onClick={onclick}>
          <div className={styles['middle-content']}>
            <EditCanvas />
          </div>
        </div>
        <div className={styles.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  )
})

export default Edit
