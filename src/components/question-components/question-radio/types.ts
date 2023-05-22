import { ComponentPropsType } from '../index'

export const questionRadioProps: QuestionRadioProps = {
  title: '单选框',
  value: '',
  isVertical: false,
  options: [
    {
      value: 'A',
      text: 'A',
    },
    {
      value: 'B',
      text: 'B',
    },
    {
      value: 'C',
      text: 'C',
    },
  ],
}

export type OptionType = {
  value: string
  text: string
  checked?: boolean
}

export type QuestionRadioProps = {
  title?: string
  value?: string
  isVertical?: boolean
  options?: OptionType[]

  onChange?: (props: ComponentPropsType) => void
  isLock?: boolean
}
