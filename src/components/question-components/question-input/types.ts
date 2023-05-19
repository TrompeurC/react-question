import { ComponentPropsType } from './../index'
export const questionInputProps = {
  title: '输入框标题',
  placeholder: '请输入。。。',
}

export type QuestionInputProps = {
  title?: string
  placeholder?: string
  onChange?: (props: ComponentPropsType) => void
}
