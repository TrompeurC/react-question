import { ComponentPropsType } from '../index'

export const questionInfoProps = {
  title: '请输入标题',
  desc: '请输入描述',
}

export type QuestionInfoProps = {
  title?: string
  desc?: string

  onChange?: (props: ComponentPropsType) => void
  isLock?: boolean
}
