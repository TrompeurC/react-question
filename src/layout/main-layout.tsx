import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = memo(() => {
  return (
    <>
      <div>main-header</div>
      <div>
        <Outlet />
      </div>
      <div>main-footer</div>
    </>
  )
})

export default MainLayout
