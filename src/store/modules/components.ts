import { ComponentConfType, ComponentPropsType } from './../../components/question-components/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
}

type ComponentState = {
  list: Array<ComponentInfoType>
  selectId: string
}

const initialState: ComponentState = {
  list: [],
  selectId: '',
}

const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    resetComponentList(state, action: PayloadAction<ComponentInfoType[]>) {
      state.list = action.payload
    },
    changeSelectId(state, action: PayloadAction<string>) {
      state.selectId = action.payload
    },
    insertComponent(state, action: PayloadAction<ComponentInfoType>) {
      const { selectId, list } = state
      if (selectId) {
        const index = list.findIndex(item => item.fe_id === selectId)
        if (index >= 0) {
          list.splice(index + 1, 0, action.payload)
        }
      } else {
        list.push(action.payload)
      }

      state.selectId = action.payload.fe_id
      state.list = [...list]
    },
    changePropsById(state, action: PayloadAction<ComponentPropsType>) {
      const { list, selectId } = state
      const comp = list.find(item => item.fe_id === selectId)
      comp!.props = action.payload
    },
  },
})

export const { resetComponentList, changeSelectId, insertComponent, changePropsById } =
  componentSlice.actions

export default componentSlice.reducer
