import React, { memo } from 'react'
import { Link } from 'react-router-dom'

const UserInfo = memo(() => {
  return (
    <div>
      <Link to={'/login'}>登录</Link>
    </div>
  )
})

export default UserInfo
