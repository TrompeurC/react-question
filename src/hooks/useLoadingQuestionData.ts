import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionById } from '../services/question'
import { useAppDispatch } from '../store'
import { changeSelectId, resetComponentList } from '../store/modules/components'
import { resetPageInfo } from '../store/modules/pageinfo'

// export default function useLoadingQuestionData() {
//   const { id = '' } = useParams()
//   async function load() {
//     const data = await getQuestionById(id)
//     return data
//   }
//   const { loading, data, error } = useRequest(load)

//   return { loading, question: data, error }
// }

export default function useLoadingQuestionData() {
  const { id = '' } = useParams()
  const dispatch = useAppDispatch()
  const { run, loading } = useRequest(getQuestionById, {
    manual: true,
    onSuccess(res) {
      const { title, componentList, css, js, desc } = res
      dispatch(resetComponentList(componentList))
      const list = componentList.filter((item: any) => !item.isHidden)
      if (list.length > 0) {
        dispatch(changeSelectId(list[0].fe_id))
      }
      dispatch(resetPageInfo({ title, css, js, desc }))
    },
  })

  useEffect(() => {
    id && run(id)
  }, [id])

  return { loading }
}
