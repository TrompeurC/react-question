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
}

function isActiveElement() {
  const avticeEle = document.activeElement

  if (avticeEle === document.body) return true
  return false
}
