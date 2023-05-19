import { Input, Typography } from 'antd'
import React, { FC, memo } from 'react'
import { questionInputProps, QuestionInputProps } from './types'

const { Paragraph } = Typography

const QuestionInput: FC<QuestionInputProps> = memo(props => {
  const { title, placeholder } = { ...questionInputProps, ...props }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Input placeholder={placeholder}></Input>
    </div>
  )
})

export default QuestionInput
