import React, { FC, memo } from 'react'
import { questionInfoProps, QuestionInfoProps } from './types'
import { Typography } from 'antd'

const { Paragraph, Title } = Typography

const QuestionParagraph: FC<QuestionInfoProps> = memo(props => {
  const { title, desc } = { ...questionInfoProps, ...props }
  const reText = desc.split(`\n`)
  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        {title}
      </Title>
      <Paragraph style={{ textAlign: 'center' }}>
        {reText.map((item, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {item}
          </span>
        ))}
      </Paragraph>
    </div>
  )
})

export default QuestionParagraph
