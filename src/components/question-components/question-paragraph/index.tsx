import React, { FC, memo } from 'react'
import { questionParagraphProps, QuestionParagraphProps } from './types'
import { Typography } from 'antd'

const { Paragraph } = Typography

const QuestionParagraph: FC<QuestionParagraphProps> = memo(props => {
  const { text, isCenter } = { ...questionParagraphProps, ...props }
  const reText = text.split(`\n`)
  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start' }}>
      {reText.map((item, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {item}
        </span>
      ))}
    </Paragraph>
  )
})

export default QuestionParagraph
