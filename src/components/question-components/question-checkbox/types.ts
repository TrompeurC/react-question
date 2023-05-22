import { ComponentPropsType } from '../index'

export const questionCheckboxProps: QuestionCheckboxProps = {
  title: '多选框',
  isVertical: false,
  options: [
    {
      value: 'A',
      text: 'A',
      checked: false,
    },
    {
      value: 'B',
      text: 'B',
      checked: false,
    },
    {
      value: 'C',
      text: 'C',
      checked: false,
    },
  ],
}

export type OptionType = {
  value: string
  text: string
  checked?: boolean
}

export type QuestionCheckboxProps = {
  title?: string
  isVertical?: boolean
  options?: OptionType[]

  onChange?: (props: ComponentPropsType) => void
  isLock?: boolean
}
