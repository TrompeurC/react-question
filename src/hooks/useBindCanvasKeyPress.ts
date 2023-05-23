import { ActionCreators } from 'redux-undo'
import { useKeyPress } from 'ahooks'
import { EventHandler } from 'react'
import { useAppDispatch } from '../store'
import {
  copyComponent,
  deleteComponent,
  moveComponent,
  pasteComponent,
} from '../store/modules/components'

export default function useBindCanvasKeyPress() {
  const dispatch = useAppDispatch()
  useKeyPress(['backspace', 'delete'], () => {
    isActiveElement() && dispatch(deleteComponent())
  })
  useKeyPress(['ctrl.c', 'meta.c'], () => {
    isActiveElement() && dispatch(copyComponent())
  })
  useKeyPress(['ctrl.v', 'meta.v'], () => {
    isActiveElement() && dispatch(pasteComponent())
  })

  useKeyPress('uparrow', () => {
    dispatch(moveComponent(-1))
  })
  useKeyPress('downarrow', () => {
    dispatch(moveComponent(1))
  })
  useKeyPress(
    ['ctrl.z', 'meta.z'],
    () => {
      dispatch(ActionCreators.undo())
    },
    {
      exactMatch: true,
    }
  )
  useKeyPress(['ctrl.shift.z', 'meta.shift.z'], () => {
    dispatch(ActionCreators.redo())
  })
}

function isActiveElement() {
  const acticeEle = document.activeElement

  if (acticeEle === document.body) return true
  if (acticeEle?.matches('div[role=button]')) return true
  return false
}
