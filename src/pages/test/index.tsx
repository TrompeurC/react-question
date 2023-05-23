import React, { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import { SortableItem } from './SortableItem'
import useGetComponentList from '../../hooks/useGetComponentList'
import mockjs from 'mockjs'
const Random = mockjs.Random
const list = [
  {
    id: '0',
    fe_id: '0',
    type: 'questionTitle',
    title: '标题',
    isHidden: Random.boolean(),
    isLock: Random.boolean(),
    props: { text: '个人信息调研', level: 1, isCenter: false },
  },
  {
    id: '1',
    fe_id: '1',
    type: 'questionInput',
    title: '输入框1',
    isHidden: Random.boolean(),
    isLock: Random.boolean(),
    props: { title: '你的名字', placeholder: '请输入...' },
  },
  {
    id: '2',
    fe_id: '2',
    type: 'questionInput',
    title: '输入框2',
    isHidden: Random.boolean(),
    isLock: Random.boolean(),
    props: { title: '你的电话', placeholder: '请输入...' },
  },
  {
    id: '3',
    fe_id: '3',
    type: 'questionInfo',
    title: '问卷信息',
    isHidden: Random.boolean(),
    isLock: Random.boolean(),
    props: {
      desc: '问卷描述',
      title: '问卷标题...',
    },
  },
  {
    id: '4',
    fe_id: '4',
    type: 'questionParagraph',
    title: '段落',
    isHidden: Random.boolean(),
    isLock: Random.boolean(),
    props: {
      text: '问卷段落',
      isCenter: Random.boolean(),
    },
  },
  {
    id: '5',
    fe_id: '5',
    type: 'questionRadio',
    title: '单选框',
    isHidden: false,
    isLock: Random.boolean(),
    props: {
      title: '单选框',
      value: '',
      isVertical: false,
      options: [
        {
          value: 'A',
          text: 'A',
        },
        {
          value: 'B',
          text: 'B',
        },
        {
          value: 'C',
          text: 'C',
        },
      ],
    },
  },
  {
    id: '6',
    fe_id: '6',
    type: 'questionCheckbox',
    title: '多选框',
    isHidden: Random.boolean(),
    isLock: Random.boolean(),
    props: {
      title: '多选框',
      isVertical: false,
      options: [
        {
          value: 'A',
          text: 'A',
          checked: false,
        },
        {
          value: 'B',
          text: 'B',
          checked: false,
        },
        {
          value: 'C',
          text: 'C',
          checked: false,
        },
      ],
    },
  },
]

function TextPage() {
  const [items, setItems] = useState(list)
  // const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map(item => (
            <SortableItem key={item.id} id={item.id}>
              {item.title}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      setItems(items => {
        // const oldIndex = items.indexOf(Number(active.id))
        // const newIndex = items.indexOf(Number(over.id))

        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)
        console.log(oldIndex, newIndex)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
}
export default TextPage
