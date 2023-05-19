import { shallowEqual } from 'react-redux'
import { useAppSelector } from './../store/index'
export default function useGetComponentList() {
  const { list, selectId } = useAppSelector(state => state.componentList, shallowEqual)
  const selectComponent = list.find(item => item.fe_id == selectId)
  return { list, selectId, selectComponent }
}
