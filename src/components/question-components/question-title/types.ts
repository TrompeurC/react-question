import { ComponentPropsType } from './../index'

export const questionTitleProps = {
  text: '标题',
  // level: 1,
  isCenter: false,
}

export type QuestionTitleProps = {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean

  onChange?: (props: ComponentPropsType) => void
  isLock?: boolean
}
