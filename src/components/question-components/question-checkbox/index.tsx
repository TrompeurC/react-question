import { Typography, Radio, Space, Checkbox } from 'antd'
import React, { FC, memo } from 'react'
import { QuestionCheckboxProps, questionCheckboxProps } from './types'

const { Paragraph } = Typography

const QuestionTitle: FC<QuestionCheckboxProps> = memo((props: QuestionCheckboxProps) => {
  const { title, options, isVertical } = { ...questionCheckboxProps, ...props }
  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space direction={isVertical ? 'vertical' : 'horizontal'}>
        {options?.map(({ value, checked, text }) => (
          <Checkbox key={value} value={value} checked={checked}>
            {text}
          </Checkbox>
        ))}
      </Space>
    </div>
  )
})

export default QuestionTitle
