import React, { memo } from 'react'
import useLoadingQuestionData from '../../../hooks/useLoadingQuestionData'

const Stat = memo(() => {
  const { loading, question } = useLoadingQuestionData()
  return (
    <>
      <div>stat</div>
      {loading ? <p>loading</p> : JSON.stringify(question)}
    </>
  )
})

export default Stat
