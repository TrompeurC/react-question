import React, { memo } from 'react'
import styles from './manage.layout.module.scss'
import { Outlet } from 'react-router-dom'

const ManageLayout = memo(() => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>left</div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
})

export default ManageLayout
