import { useRequest } from 'ahooks'
import { useParams } from 'react-router-dom'
import { getQuestionById } from '../services/question'

export default function useLoadingQuestionData() {
  const { id = '' } = useParams()
  async function load() {
    const data = await getQuestionById(id)
    return data
  }
  const { loading, data, error } = useRequest(load)

  return { loading, question: data, error }
}
