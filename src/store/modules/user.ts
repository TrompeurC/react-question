import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  nickname: '',
}

type StateType = typeof initialState

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state: StateType, action: PayloadAction<StateType>) {
      return action.payload
    },
    logout(state: StateType) {
      return initialState
    },
  },
})

export const { login, logout } = userReducer.actions
export default userReducer.reducer
