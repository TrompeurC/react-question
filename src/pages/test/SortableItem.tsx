import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props: any) {
  const { children } = props
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '10px',
    border: '1px solid',
    marginBottom: '10px',
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {/* ... */}
      {/* {props.id} */}
      <div>{children}</div>
    </div>
  )
}
