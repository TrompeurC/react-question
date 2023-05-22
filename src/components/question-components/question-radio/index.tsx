import { Typography, Radio, Space } from 'antd'
import React, { FC, memo } from 'react'
import { QuestionRadioProps, questionRadioProps } from './types'

const { Paragraph } = Typography

const QuestionTitle: FC<QuestionRadioProps> = memo((props: QuestionRadioProps) => {
  const { title, options, value, isVertical } = { ...questionRadioProps, ...props }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Radio.Group value={value}>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {options?.map(item => (
            <Radio key={item.value} value={item.value}>
              {item.text}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  )
})

export default QuestionTitle
