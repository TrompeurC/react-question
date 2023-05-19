import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import useLoadUserInfoData from '../hooks/useloadUserInfodata'
import useNavPage from '../hooks/useNavPage'

const QuestionLayout = memo(() => {
  const wait = useLoadUserInfoData()
  useNavPage(wait)
  return <div>{!wait && <Outlet />}</div>
})

export default QuestionLayout
