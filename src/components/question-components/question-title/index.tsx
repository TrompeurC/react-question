import { Typography } from 'antd'
import React, { FC, memo } from 'react'
import { questionTitleProps, QuestionTitleProps } from './types'

const { Title } = Typography

function getFontSize(level: number) {
  if (level === 1) return '24px'
  if (level === 2) return '20px'
  if (level === 3) return '16px'
  return '16px'
}

const QuestionTitle: FC<QuestionTitleProps> = memo((props: QuestionTitleProps) => {
  const { text = '', isCenter = false, level = 1 } = { ...questionTitleProps, ...props }
  return (
    <Title
      level={level}
      style={{ textAlign: isCenter ? 'center' : 'start', fontSize: getFontSize(level) }}
    >
      {text}
    </Title>
  )
})

export default QuestionTitle
