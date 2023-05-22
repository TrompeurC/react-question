import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

type StateType = {
  title: string
  desc: string
  js: string
  css: string
}

const initialState: StateType = {
  title: '',
  desc: '',
  js: '',
  css: '',
}
const pageInfo = createSlice({
  name: 'pageinfo',
  initialState,
  reducers: {
    resetPageInfo: produce((state: StateType, action: PayloadAction<StateType>) => {
      return action.payload
    }),
  },
})

export const { resetPageInfo } = pageInfo.actions

export default pageInfo.reducer
