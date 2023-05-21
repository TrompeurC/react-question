import { getNextSelectId } from './../utils'
import { ComponentConfType, ComponentPropsType } from './../../components/question-components/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden: boolean
  isLock: boolean
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
    deleteComponent(state) {
      const { list, selectId } = state
      state.selectId = getNextSelectId(selectId, list)
      state.list = list.filter(item => item.fe_id !== selectId)
    },
    hiddenComponent(state, action: PayloadAction<boolean>) {
      const { selectId, list } = state
      const curComponent = list.find(item => item.fe_id === selectId)
      if (!curComponent) return
      state.selectId = getNextSelectId(selectId, list)
      curComponent.isHidden = action.payload
    },
    lockComponent(state, action: PayloadAction<boolean>) {
      const { selectId, list } = state
      const curComponent = list.find(item => item.fe_id === selectId)
      if (!curComponent) return
      curComponent.isLock = action.payload
    },
  },
})

export const {
  deleteComponent,
  resetComponentList,
  changeSelectId,
  insertComponent,
  changePropsById,
  hiddenComponent,
  lockComponent,
} = componentSlice.actions

export default componentSlice.reducer
