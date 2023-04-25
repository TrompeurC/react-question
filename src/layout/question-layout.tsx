import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout = memo(() => {
  return (
    <div>
      QuestionLayout
      <Outlet />
    </div>
  )
})

export default QuestionLayout
