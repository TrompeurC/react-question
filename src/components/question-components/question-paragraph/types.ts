import { ComponentPropsType } from './../index'

export const questionParagraphProps = {
  text: '一段段落',
  isCenter: false,
}

export type QuestionParagraphProps = {
  text?: string
  isCenter?: boolean

  onChange?: (props: ComponentPropsType) => void
  isLock?: boolean
}
