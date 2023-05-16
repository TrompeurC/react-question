import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionList } from '../services/question'

type Params = {
  isPublished: boolean
  isStar: boolean
  isDelete: boolean
}

export default function useQuestionListData(opts: Partial<Params> = {}) {
  const [searhPamams] = useSearchParams()
  const { isStar = false, isDelete = false } = opts
  const {
    loading,
    data = {},
    error,
  } = useRequest(
    async () => {
      const keyword = searhPamams.get('keyword') || ''
      const data = await getQuestionList({ keyword, isStar, isDelete })
      return data
    },
    {
      refreshDeps: [searhPamams],
    }
  )
  return { loading, data, error }
}
