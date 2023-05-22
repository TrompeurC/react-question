import { Input, Typography } from 'antd'
import React, { FC, memo } from 'react'
import { questionTextareaProps, QuestionTextareaProps } from './types'

const { Paragraph } = Typography

const QuestionInput: FC<QuestionTextareaProps> = memo(props => {
  const { title, placeholder } = { ...questionTextareaProps, ...props }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Input.TextArea placeholder={placeholder}></Input.TextArea>
    </div>
  )
})

export default QuestionInput
