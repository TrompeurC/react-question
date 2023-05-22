import { FC } from 'react'

import QuestionInput from './question-input'
import { questionInputProps, QuestionInputProps } from './question-input/types'
import PropsComponentInput from './question-input/props-component'

import QuestionTitle from './question-title'
import { questionTitleProps, QuestionTitleProps } from './question-title/types'
import PropsComponentTitle from './question-title/props-component'

import QuestionParagraph from './question-paragraph'
import { QuestionParagraphProps, questionParagraphProps } from './question-paragraph/types'
import PropsComponentParagraph from './question-paragraph/props-component'

import QuestionInfo from './question-info'
import { QuestionInfoProps, questionInfoProps } from './question-info/types'
import PropsComponentInfo from './question-info/props-component'

import QuestionTextArea from './question-textarea'
import { questionTextareaProps, QuestionTextareaProps } from './question-textarea/types'
import PropsComponentTextarea from './question-textarea/props-component'

import QuestionRadio from './question-radio'
import { questionRadioProps, QuestionRadioProps } from './question-radio/types'
import PropsComponentRadio from './question-radio/props-component'

import QuestionCheckbox from './question-checkbox'
import { questionCheckboxProps, QuestionCheckboxProps } from './question-checkbox/types'
import PropsComponentCheckbox from './question-checkbox/props-component'

export type ComponentPropsType =
  | QuestionInputProps
  | QuestionTitleProps
  | QuestionParagraphProps
  | QuestionInfoProps
  | QuestionTextareaProps
  | QuestionRadioProps
  | QuestionCheckboxProps

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

const QuestionParagraphConf = {
  title: '段落',
  type: 'questionParagraph',
  Component: QuestionParagraph,
  defaultProps: questionParagraphProps,
  PropsComponent: PropsComponentParagraph,
}

const QuestionInfoConf = {
  title: '问卷信息',
  type: 'questionInfo',
  Component: QuestionInfo,
  defaultProps: questionInfoProps,
  PropsComponent: PropsComponentInfo,
}

const QuestionTextareaConf = {
  title: '多行输入',
  type: 'questionTextarea',
  Component: QuestionTextArea,
  defaultProps: questionTextareaProps,
  PropsComponent: PropsComponentTextarea,
}

const QuestionRadioConf = {
  title: '单选框',
  type: 'questionRadio',
  Component: QuestionRadio,
  defaultProps: questionRadioProps,
  PropsComponent: PropsComponentRadio,
}

const QuestionCheckBoxConf = {
  title: '复选框',
  type: 'questionCheckbox',
  Component: QuestionCheckbox,
  defaultProps: questionCheckboxProps,
  PropsComponent: PropsComponentCheckbox,
}

export const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf,
  QuestionParagraphConf,
  QuestionInfoConf,
  QuestionTextareaConf,
  QuestionRadioConf,
  QuestionCheckBoxConf,
]

export const getComponentConfByType = (type: string) => {
  return componentConfList.find(item => type === item.type)
}

export const groupComponent = [
  {
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionParagraphConf],
  },
  {
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionInfoConf, QuestionTextareaConf],
  },
  {
    groupName: '选择框',
    components: [QuestionRadioConf, QuestionCheckBoxConf],
  },
]
