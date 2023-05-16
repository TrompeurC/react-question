import React, { memo, useEffect } from 'react'
import useLoadingQuestionData from '../../../hooks/useLoadingQuestionData'

const Edit = memo(() => {
  const { loading, question } = useLoadingQuestionData()
  return (
    <>
      <div>Edit</div>
      {loading ? <p>loading</p> : JSON.stringify(question)}
    </>
  )
})

export default Edit
