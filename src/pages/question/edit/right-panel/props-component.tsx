import React, { memo } from 'react'
import {
  ComponentPropsType,
  getComponentConfByType,
} from '../../../../components/question-components'
import useGetComponentList from '../../../../hooks/useGetComponentList'
import { useAppDispatch } from '../../../../store'
import { changePropsById } from '../../../../store/modules/components'

const NotSelected = (
  <div style={{ textAlign: 'center' }}>
    <span>未选中组件</span>
  </div>
)

const PropsComponent = memo(() => {
  const { selectId, list, selectComponent } = useGetComponentList()
  const dispatch = useAppDispatch()

  if (!selectComponent) return NotSelected

  const { type, props, isLock } = selectComponent
  const componentConf = getComponentConfByType(type)!
  const { PropsComponent } = componentConf
  const onChange = (props: ComponentPropsType) => {
    dispatch(changePropsById(props))
  }

  return (
    <div>
      {selectId ? <PropsComponent onChange={onChange} {...props} isLock={isLock} /> : NotSelected}
    </div>
  )
})

export default PropsComponent
