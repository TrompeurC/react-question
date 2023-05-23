import { getNextSelectId } from './../utils'
import { ComponentConfType, ComponentPropsType } from './../../components/question-components/index'
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { produce } from 'immer'
import { cloneDeep } from 'lodash'
import { nanoid } from 'nanoid'
import { arrayMove } from '@dnd-kit/sortable'

export type ComponentInfoType = {
  fe_id: string
  id: string
  type: string
  title: string
  isHidden: boolean
  isLock: boolean
  props: ComponentPropsType
}

type ComponentState = {
  list: Array<ComponentInfoType>
  selectId: string
  copyComponent: ComponentInfoType | null
}

const initialState: ComponentState = {
  list: [],
  selectId: '',
  copyComponent: null,
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
      // const component = state.list.find(item => item.fe_id === state.selectId);
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
    copyComponent(state) {
      const { list, selectId } = state
      const comp = list.find(item => item.fe_id === selectId)
      if (!comp) return
      state.copyComponent = cloneDeep({ ...comp })
    },
    pasteComponent(state) {
      const { list, selectId, copyComponent } = state
      if (!copyComponent) return
      copyComponent.fe_id = nanoid()
      copyComponent.id = nanoid()
      if (selectId) {
        const index = list.findIndex(item => item.fe_id === selectId)
        if (index >= 0) {
          list.splice(index + 1, 0, copyComponent)
        }
      } else {
        list.push(copyComponent)
      }

      state.selectId = copyComponent.fe_id
      state.list = [...list]
    },
    moveComponent(state, action: PayloadAction<number>) {
      const { list, selectId } = state
      const index = list.findIndex(item => item.fe_id === selectId)
      if (list.length === 1) return
      const next = index + action.payload
      let nextSelectId = ''

      if (next === -1) nextSelectId = list.at(-1)!.fe_id
      else if (next === list.length) nextSelectId = list[0].fe_id
      else nextSelectId = list[next].fe_id

      state.selectId = nextSelectId
    },
    changeComponentTitle(state, action: PayloadAction<string>) {
      const { selectId, list } = state
      const curCom = list.find(item => item.fe_id === selectId)
      if (!curCom) return
      curCom.title = action.payload
      state.list = [...list]
    },
    changeComponent(state, action: PayloadAction<ComponentInfoType>) {
      const { list } = state
      const { fe_id } = action.payload
      const curCom = list.find(item => item.fe_id === fe_id)
      if (!curCom) return
      Object.assign(curCom, action.payload)
      state.list = [...list]
    },
    swapComponent(state, action: PayloadAction<{ oldIndex: number; newIndex: number }>) {
      state.list = arrayMove(state.list, action.payload.oldIndex, action.payload.newIndex)
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
  copyComponent,
  pasteComponent,
  moveComponent,
  changeComponentTitle,
  changeComponent,
  swapComponent,
} = componentSlice.actions

export default componentSlice.reducer
