import request from './request'
import type { ResDataType } from './request'

type SearchOptions = {
  keyword: string
  isPublished: boolean
  isStar: boolean
  isDelete: boolean
  page: number
  pageSize: number
}

// 查询问卷根据id
export async function getQuestionById(id: string): Promise<ResDataType> {
  const url = `/question/${id}`
  const data = (await request.get(url)) as ResDataType

  return data
}

// 创建问卷
export async function createQuestion(): Promise<ResDataType> {
  const url = '/question'
  const data = (await request.post(url)) as ResDataType
  return data
}

// 获取问卷列表
export async function getQuestionList(opts: Partial<SearchOptions>): Promise<ResDataType> {
  const url = `/question`
  const data = (await request.get(url, { params: opts })) as ResDataType

  return data
}

// 更新问卷
export async function updateQuestion(id: string, opts: { [key: string]: any }) {
  const url = `/question/${id}`
  const data = (await request.patch(url, opts)) as ResDataType
  return data
}

// 复制问卷
export async function copyQuestion(id: string) {
  const url = `/question/duplicate/${id}`
  const data = (await request.post(url)) as ResDataType
  return data
}

// 删除问卷
export async function deleteQuestions(ids: string[]) {
  const url = '/question'
  const data = (await request.delete(url)) as ResDataType
  return data
}
