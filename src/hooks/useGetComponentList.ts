import { shallowEqual } from 'react-redux'
import { useAppSelector } from './../store/index'
export default function useGetComponentList() {
  const { list, selectId, copyComponent } = useAppSelector(
    state => state.componentList.present,
    shallowEqual
  )
  const selectComponent = list.find(item => item.fe_id == selectId)
  const components = list.filter(item => !item.isHidden)
  return { list, selectId, selectComponent, copyComponent, components }
}
