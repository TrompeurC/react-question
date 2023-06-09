import { configureStore } from '@reduxjs/toolkit'
import userReducer from './modules/user'
import componentListReducer from './modules/components'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import pageinfoReducer from './modules/pageinfo'
import undoable, { excludeAction } from 'redux-undo'

const store = configureStore({
  reducer: {
    user: userReducer,
    componentList: undoable(componentListReducer, {
      limit: 20,
      filter: excludeAction([
        'componentList/resetComponentList',
        'componentList/changeSelectId',
        'componentList/moveComponent',
      ]),
    }),
    pageInfo: pageinfoReducer,
  },
})

export default store

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
