import { FC } from 'react'
import QuestionInput from './question-input'
import { questionInputProps, QuestionInputProps } from './question-input/types'
import PropsComponentInput from './question-input/props-component'

import QuestionTitle from './question-title'
import { questionTitleProps, QuestionTitleProps } from './question-title/types'
import PropsComponentTitle from './question-title/props-component'

export type ComponentPropsType = QuestionInputProps & QuestionTitleProps

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  PropsComponent: FC<ComponentPropsType>
}

const QuestionTitleConf = {
  title: '标题',
  type: 'questionTitle',
  Component: QuestionTitle,
  defaultProps: questionTitleProps,
  PropsComponent: PropsComponentTitle,
}
const QuestionInputConf = {
  title: '输入框',
  type: 'questionInput',
  Component: QuestionInput,
  defaultProps: questionInputProps,
  PropsComponent: PropsComponentInput,
}

export const componentConfList: ComponentConfType[] = [QuestionTitleConf, QuestionInputConf]

export const getComponentConfByType = (type: string) => {
  return componentConfList.find(item => type === item.type)
}

export const groupComponent = [
  {
    groupName: '文本显示',
    components: [QuestionTitleConf],
  },
  {
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
]
