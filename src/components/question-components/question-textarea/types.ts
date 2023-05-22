import { ComponentPropsType } from '../index'
export const questionTextareaProps = {
  title: '多行输入标题',
  placeholder: '请输入。。。',
}

export type QuestionTextareaProps = {
  title?: string
  placeholder?: string

  onChange?: (props: ComponentPropsType) => void
  isLock?: boolean
}
