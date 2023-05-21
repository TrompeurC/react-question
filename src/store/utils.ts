import { ComponentInfoType } from './modules/components'

export const getNextSelectId = (selectId: string, list: ComponentInfoType[]) => {
  list = list.filter(item => !item.isHidden)
  const index = list.findIndex(item => item.fe_id === selectId)
  selectId = ''

  if (list.length === 1) return selectId

  if (list.length === index + 1) {
    selectId = list[index - 1].fe_id
  } else {
    selectId = list[index + 1].fe_id
  }

  return selectId
}
